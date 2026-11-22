import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProdus } from "../api.js";
import { ETICHETE_CONDITIE } from "../constants.js";
import styles from "./ProdusDetaliuPage.module.css";

export default function ProdusDetaliuPage() {
  const { id } = useParams();
  const [produs, setProdus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchProdus(id)
      .then((data) => {
        if (!ignore) {
          setProdus(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Loading product...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Could not load product: {error}
        </p>
        <Link to="/">Back to catalog</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Back to catalog
      </Link>

      <div className={styles.content}>
        {produs.imagine && (
          <div className={styles.imageWrap}>
            <img
              src={produs.imagine}
              alt={produs.titlu}
              className={styles.heroImage}
            />
          </div>
        )}

        <div className={styles.info}>
          <h2
            className={!produs.inStoc ? styles.unavailable : undefined}
            data-testid="detail-title"
          >
            {produs.titlu}
          </h2>

          {produs.descriere && (
            <p className={styles.description}>{produs.descriere}</p>
          )}

          <dl className={styles.fields}>
            {produs.brand && (
              <>
                <dt>Brand</dt>
                <dd>{produs.brand}</dd>
              </>
            )}

            {produs.pret && (
              <>
                <dt>Price</dt>
                <dd className={styles.price}>{produs.pret} RON</dd>
              </>
            )}

            <dt>Condition</dt>
            <dd>
              <span className={`badge badge-${produs.conditie}`}>
                {ETICHETE_CONDITIE[produs.conditie] || produs.conditie}
              </span>
            </dd>

            <dt>Availability</dt>
            <dd>{produs.inStoc ? "In Stock" : "Out of Stock"}</dd>

            {produs.specificatii && (
              <>
                <dt>Specs</dt>
                <dd>{produs.specificatii}</dd>
              </>
            )}

            <dt>ID</dt>
            <dd>{produs.id}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
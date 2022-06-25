import React from "react";

import Container from "@material-ui/core/Container";
import "./styles/phoneBtnAnimation.css";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FirstScreenStyles";

function MultiOknaScreen({ classes }) {
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.heading}>
          <div class="centerBox">
            <div class="categoryWrapper">
              <h1>Multi-Okna</h1>
              <button>
                <span>
                  <span>
                    <a
                      href="tel:+48607473123"
                      data-attr-span="Zadzwoń 607-473-123"
                    >
                      Zadzwoń 607-473-123
                    </a>
                  </span>
                </span>
              </button>
            </div>
          </div>
          <h2 className={classes.about}>
            Jesteśmy liderem sprzedaży i montażu stolarki otworowej.
          </h2>
          <p className={classes.ourOffer}>
            Pomożemy w wyborze: okien PVC , okien drewnianych, okien
            drewniano-aluminiowych, okien aluminiowych, drzwi drewnianych, drzwi
            stalowych, drzwi aluminiowych, rolet zewnętrznych, bram garażowych
            segmentowych i bram przemysłowych, parapetów zewnętrznych i
            parapetów wewnętrznych.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(MultiOknaScreen);

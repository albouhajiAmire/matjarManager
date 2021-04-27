import React from 'react';
import '../css/style.css';
import Undraw from  '../images/undraw_svg_2.svg';
function Descriptionapp() {
    return (
        <>
<main id="main">
<section class="section">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12">
        <h2 class="section-heading">La solution de facturation & gestion commerciale qui réunit toutes les fonctionnalités dont vous avez besoin</h2>
      </div>
      <div class="col-md-4 mr-auto">
        <h2 class="mb-4">CRM - Gérez la relation client & fournisseur </h2>
        <p class="mb-4"><strong>Accédez aux détails du client ou fournisseur</strong>.ycompris les informations de contact, les fichiers partagés, l'historique du compte et la situation financière. à partir d'un seul endroit, sur n'importe quel appareil.</p>
        <p class="mb-4"><strong>Obtenez des données en temps réel.</strong>sur les KPI des clients et fournisseurs, mesurez les progrès et surveillez les risques et les dépendances.</p>

      </div>
      <div class="col-md-6" data-aos="fade-left">
        <img src={Undraw} alt="Image" class="img-fluid desc-img"/>
      </div>
    </div>
  </div>
</section>
</main>
        </>
    )
}

export default Descriptionapp

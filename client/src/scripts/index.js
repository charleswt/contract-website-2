import { Workbox } from 'workbox-window';
import '../../assets/styles/style.css';
import bestoolBrush from '../../assets/images/bestoolBrush.webp'
import colorWow from '../../assets/images/colorWow.webp'
import flawlessLegs from '../../assets/images/flawlessLegs.webp'
import flawlessLegsFace from '../../assets/images/flawlessLegsFace.webp'
import tangleTeezer from '../../assets/images/tangleTeezer.webp'
import uLikeLazer from '../../assets/images/uLikeLazer.webp'
import imgLogo from '../../assets/images/logo.webp'
import boldPowder from '../../assets/images/BOLDIFYpowder.webp'
import tymo from '../../assets/images/TYMO.webp'
import garnierDye from '../../assets/images/garnierDye.webp'
import livingProofTextureSpray from '../../assets/images/livingProofTextureSpray.webp'
import moroccanoilTreatment from '../../assets/images/moroccanoilTreatment.webp'
import TRESemmeHOLD from "../../assets/images/TRESemmeHOLD.webp"
import OLOVBikiniTrimmer from "../../assets/images/OLOVBikiniTrimmer.webp"
import NaturtintPermanentHair from "../../assets/images/NaturtintPermanentHair.webp"
import lubexGlow6 from "../../assets/images/lubexGlow6.webp"
import meridianTrimmer from "../../assets/images/meridianTrimmer.webp"


// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register workbox service worker
  const workboxSW = new Workbox('./src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}

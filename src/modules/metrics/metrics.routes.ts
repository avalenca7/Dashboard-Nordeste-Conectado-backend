import { Router } from "express";
import {
  getEscolasRuraisLabInternet,
  getMediaComputadoresPorAluno,
  getTotalEscolasNordeste,
  getTotalEscolasNordesteRural,
  getDetalhesInfraRural,
  getDetalhesInternetBandaLarga,
  getListaEscolas
} from "./metrics.controller";

const router = Router();

/**
 * @openapi
 * /metrics/escolas-rurais-lab-internet:
 *   get:
 *     tags: [Metrics]
 *     summary: Retorna escolas rurais com laboratório e internet
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/escolas-rurais-lab-internet", getEscolasRuraisLabInternet);

/**
 * @openapi
 * /metrics/media-computadores-aluno:
 *   get:
 *     tags: [Metrics]
 *     summary: Retorna média de computadores por aluno
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/media-computadores-aluno", getMediaComputadoresPorAluno);

/**
 * @openapi
 * /metrics/total-escolas-nordeste:
 *   get:
 *     tags: [Metrics]
 *     summary: Retorna o total de escolas do Nordeste
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/total-escolas-nordeste", getTotalEscolasNordeste);

/**
 * @openapi
 * /metrics/total-escolas-nordeste-rural:
 *   get:
 *     tags: [Metrics]
 *     summary: Retorna o total de escolas rurais do Nordeste
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/total-escolas-nordeste-rural", getTotalEscolasNordesteRural);

/**
 * @openapi
 * /metrics/detalhes-infra-rural:
 *   get:
 *     tags: [Metrics]
 *     summary: Detalhes sobre infraestrutura rural
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/detalhes-infra-rural", getDetalhesInfraRural);

/**
 * @openapi
 * /metrics/detalhes-internet-bandaLarga:
 *   get:
 *     tags: [Metrics]
 *     summary: Detalhes sobre internet banda larga
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/detalhes-internet-bandaLarga", getDetalhesInternetBandaLarga);

/**
 * @openapi
 * /metrics/lista-escola:
 *   get:
 *     tags: [Metrics]
 *     summary: Retorna lista de escolas
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/lista-escola", getListaEscolas);

export default router;

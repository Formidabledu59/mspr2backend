/**
 * @swagger
 * components:
 *   schemas:
 *     Pandemie:
 *       type: object
 *       properties:
 *         id_pandemie:
 *           type: integer
 *         nom_pandemie:
 *           type: string
 *         virus:
 *           type: string
 *         date_debut:
 *           type: string
 *           format: date
 *         date_fin:
 *           type: string
 *           format: date
 *         description:
 *           type: string
 * 
 *     Pays:
 *       type: object
 *       properties:
 *         id_pays:
 *           type: integer
 *         nom_pays:
 *           type: string
 *         code_iso:
 *           type: string
 *         population:
 *           type: integer
 *         dimension:
 *           type: integer
 * 
 *     StatPandemie:
 *       type: object
 *       properties:
 *         id_stat:
 *           type: integer
 *         id_pandemie:
 *           type: integer
 *         id_pays:
 *           type: integer
 *         date:
 *           type: string
 *           format: date
 *         nouveaux_cas:
 *           type: integer
 *         nouveaux_deces:
 *           type: integer
 *         nouveaux_gueris:
 *           type: integer
 *         cas_actifs:
 *           type: integer
 *
 * /pandemie:
 *   get:
 *     summary: Obtenir toutes les pandémies
 *     responses:
 *       200:
 *         description: Liste des pandémies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pandemie'
 *
 * /pays:
 *   get:
 *     summary: Obtenir tous les pays
 *     responses:
 *       200:
 *         description: Liste des pays
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pays'
 *
 * /stat_pandemie:
 *   get:
 *     summary: Obtenir toutes les stats
 *     responses:
 *       200:
 *         description: Liste des stats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StatPandemie'
 *
 * /statpandemie:
 *   post:
 *     summary: Obtenir les stats d’un pays et d’une pandémie sur une période donnée
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               countryId:
 *                 type: integer
 *               typeId:
 *                 type: integer
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Liste filtrée des statistiques
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StatPandemie'
 */

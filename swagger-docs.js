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
 *
 * /info/pays-par-pandemie/{id_pandemie}:
 *   get:
 *     summary: Liste des pays ayant des stats pour une pandémie
 *     parameters:
 *       - in: path
 *         name: id_pandemie
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la pandémie
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
 * /info/pandemies-par-pays/{id_pays}:
 *   get:
 *     summary: Liste des pandémies pour lesquelles un pays a des stats
 *     parameters:
 *       - in: path
 *         name: id_pays
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du pays
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
 * /info/total-par-pays/{id_pandemie}:
 *   get:
 *     summary: Total de cas par pays pour une pandémie
 *     parameters:
 *       - in: path
 *         name: id_pandemie
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la pandémie
 *     responses:
 *       200:
 *         description: Liste des pays avec total de cas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nom_pays:
 *                     type: string
 *                   total_cas:
 *                     type: integer
 *
 * /info/total-pays-pandemie/{id_pays}/{id_pandemie}:
 *   get:
 *     summary: Total de cas pour un pays et une pandémie
 *     parameters:
 *       - in: path
 *         name: id_pays
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: id_pandemie
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Total de cas pour le pays et la pandémie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_cas:
 *                   type: integer
 *
 * /info/pays-contamination/{id_pandemie}:
 *   get:
 *     summary: Pays triés par taux de contamination pour une pandémie
 *     parameters:
 *       - in: path
 *         name: id_pandemie
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la pandémie
 *     responses:
 *       200:
 *         description: Liste des pays triés par taux de contamination
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nom_pays:
 *                     type: string
 *                   population:
 *                     type: integer
 *                   total_cas:
 *                     type: integer
 *                   taux_contamination:
 *                     type: number
 *                     format: float
 */

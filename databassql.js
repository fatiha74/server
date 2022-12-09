// const contratRouter = require("./routes/contrat/contrat.router");


// CREATE TABLE utilisateur(

    
// );

// CREATE TABLE employeur(

    
// )INHERITS(utilisateur);

// CREATE TABLE salarie(

    
// )INHERITS(utilisateur);

// CREATE TABLE contratRouter(

// );
// -- This script was generated by the ERD tool in pgAdmin 4.
// -- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
// BEGIN;


// CREATE TABLE IF NOT EXISTS public.contrat
// (
//     contrat_id integer NOT NULL DEFAULT nextval('contrat_contrat_id_seq'::regclass),
//     entreprise_id integer,
//     salarie_id integer,
//     type_contrat character varying COLLATE pg_catalog."default",
//     is_fulltime boolean,
//     date_debut date,
//     date_fin date,
//     periode_fin_essai date,
//     motif_recrutement character varying COLLATE pg_catalog."default",
//     fonction character varying COLLATE pg_catalog."default",
//     statut character varying COLLATE pg_catalog."default",
//     CONSTRAINT contrat_pkey PRIMARY KEY (contrat_id)
// );

// CREATE TABLE IF NOT EXISTS public.entreprise
// (
//     utilisateur_id integer NOT NULL DEFAULT nextval('utilisateur_utilisateur_id_seq'::regclass),
//     nom character varying COLLATE pg_catalog."default",
//     prenom character varying COLLATE pg_catalog."default",
//     telephone numeric,
//     rue character varying COLLATE pg_catalog."default",
//     cp numeric,
//     ville character varying COLLATE pg_catalog."default",
//     entreprise_id integer NOT NULL DEFAULT nextval('entreprise_entreprise_id_seq'::regclass),
//     "SIRET" numeric,
//     raison_sociale character varying COLLATE pg_catalog."default",
//     code_ape numeric,
//     email character varying COLLATE pg_catalog."default",
//     mot_de_passe character varying COLLATE pg_catalog."default",
//     role character varying COLLATE pg_catalog."default",
//     date_connexion date,
//     date_deconnexion date,
//     CONSTRAINT entreprise_pkey PRIMARY KEY (entreprise_id)
// );

// CREATE TABLE IF NOT EXISTS public.salarie
// (
//     utilisateur_id integer NOT NULL DEFAULT nextval('utilisateur_utilisateur_id_seq'::regclass),
//     nom character varying COLLATE pg_catalog."default",
//     prenom character varying COLLATE pg_catalog."default",
//     telephone numeric,
//     rue character varying COLLATE pg_catalog."default",
//     cp numeric,
//     ville character varying COLLATE pg_catalog."default",
//     salarie_id integer NOT NULL DEFAULT nextval('salarie_salarie_id_seq'::regclass),
//     nom_jeune_fille character varying COLLATE pg_catalog."default",
//     "num_SS" numeric,
//     date_naissance date,
//     lieu_naissance character varying COLLATE pg_catalog."default",
//     email character varying COLLATE pg_catalog."default",
//     mot_de_passe character varying COLLATE pg_catalog."default",
//     role character varying COLLATE pg_catalog."default",
//     date_connexion date,
//     date_deconnexion date,
//     CONSTRAINT salarie_pkey PRIMARY KEY (salarie_id)
// );

// CREATE TABLE IF NOT EXISTS public.utilisateur
// (
//     utilisateur_id integer NOT NULL DEFAULT nextval('utilisateur_utilisateur_id_seq'::regclass),
//     nom character varying COLLATE pg_catalog."default",
//     prenom character varying COLLATE pg_catalog."default",
//     telephone numeric,
//     rue character varying COLLATE pg_catalog."default",
//     cp numeric,
//     ville character varying COLLATE pg_catalog."default",
//     email character varying COLLATE pg_catalog."default",
//     mot_de_passe character varying COLLATE pg_catalog."default",
//     role character varying COLLATE pg_catalog."default",
//     date_connexion date,
//     date_deconnexion date,
//     CONSTRAINT utilisateur_pkey PRIMARY KEY (utilisateur_id)
// );

// ALTER TABLE IF EXISTS public.contrat
//     ADD CONSTRAINT fk_entreprise FOREIGN KEY (entreprise_id)
//     REFERENCES public.entreprise (entreprise_id) MATCH SIMPLE
//     ON UPDATE NO ACTION
//     ON DELETE NO ACTION;


// ALTER TABLE IF EXISTS public.contrat
//     ADD CONSTRAINT fk_salarie FOREIGN KEY (salarie_id)
//     REFERENCES public.salarie (salarie_id) MATCH SIMPLE
//     ON UPDATE NO ACTION
//     ON DELETE NO ACTION;

// END;

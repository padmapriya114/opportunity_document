const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertopportunity_document = (request, response) => {
   const { id, opportunity_document_type_id, url, opportunity_id, opportunity_document_content_type_id, opportunity_document_posted_by_name, opportunity_document_posted_by_fi_id, opportunity_document_posted_by_user_id, created, updated} = request.body
     pool.query( "INSERT INTO cbanc2.opportunity_document ( id, opportunity_document_type_id, url, opportunity_id, opportunity_document_content_type_id, opportunity_document_posted_by_name, opportunity_document_posted_by_fi_id, opportunity_document_posted_by_user_id, created, updated) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",[ id, opportunity_document_type_id, url, opportunity_id, opportunity_document_content_type_id, opportunity_document_posted_by_name, opportunity_document_posted_by_fi_id, opportunity_document_posted_by_user_id, created, updated], (error, results) => {
       if (error) {
         throw error
       }
       response.status(201).send('A new row is inserted in opportunity_document ')
          })
   }

module.exports = {
insertaddress
}

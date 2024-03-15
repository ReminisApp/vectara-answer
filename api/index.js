const express = require("express");
const Parse = require('parse/node');

const { v4 } = require('uuid');
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4444; // default port 4444 for local development and 3000 for docker
app.use(express.json());
app.use("/", express.static("build"));

app.get("/", function (req, res) {
    res.render("build/index.html");
});

const proxyOptions = {
    target: `https://api.vectara.io`,
    changeOrigin: true,
    pathRewrite: { "^/v1/query": "/v1/query" },
    onProxyReq: (proxyReq, req) => {
        proxyReq.setHeader("Content-Type", "application/json");
        proxyReq.setHeader("Accept", "application/json");
        proxyReq.setHeader("customer-id", "593522853");
        console.log("api key is")
        console.log(process.env.api_key);
        proxyReq.setHeader("x-api-key", process.env.api_key);
        proxyReq.setHeader("grpc-timeout", "60S");
        proxyReq.setHeader("X-Source", "vectara-answer");

        if (req.body) {
            console.log("api key in body is")
            console.log(req.body);
            console.log("headers");
            console.log(req.headers);
            console.log(req.headers["x-api-key"]);
            console.log("found in api index memid")
            console.log(req.headers["memid"]);
            const bodyData = JSON.stringify(req.body);
            if(req.headers["memid"] == undefined){
                if(req.headers["x-api-key"] == undefined){
                    proxyReq.setHeader("x-api-key", process.env.api_key);

                }
                else {
                    proxyReq.setHeader("x-api-key", req.headers["x-api-key"]);

                }
            }
            else {

                if(req.headers["x-api-key"] == undefined){
                    proxyReq.setHeader("x-api-key", process.env.api_key);

                }
                else {
                    proxyReq.setHeader("x-api-key", req.headers["x-api-key"]);

                }
            }

                proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
                proxyReq.write(bodyData);


        }
    },
};
app.use("/v1/query", createProxyMiddleware(proxyOptions));

app.post("/config", (req, res) => {
    console.log(req.body.memid)
    const memid = req.body.memid;
    Parse.initialize("M7U3MemtabhLjEe4yYOCz15uEIoFWeD98uCklwSs", "fp5JxYm4d8tTQ9jjxZ4RXTmsWSKl2birahdPEgIy");

    Parse.serverURL = 'https://parsecowrite.reminis.app/parse'

    const obj = new Parse.Object('GameScoreNew');
    obj.set('score',1337);
    console.log("test1")
    obj.save().then((results) => {
        console.log("test2")
        console.log("results")
        console.log(results)
        const query = new Parse.Query('GameScoreNew');
        const objAgain = query.get(obj.id);
        query.find(obj.id)
            .then((results) => {
                console.log("test3")
                console.log("results")
                console.log(results)
                const GameScore = Parse.Object.extend("VectaraCorpusMap");
                try {
                    const query = new Parse.Query(GameScore);
                    console.log("querry")
                    console.log(query)
                    console.log("found memid")
                    console.log(memid)
                    query.equalTo("memid", "" + memid);
                    const results = query.find().then((results) => {
                        var corpId = "22,22";
                        var sourcesL = "keymatememory,academic";
                        var allsourcesL = "False";
                        var api_keyL = "zwt_I2BwpavvVixbzcZ5PFOmzmBS0Ip-fw7MQFvkZQ";
                        console.log(results)
                        if (results.length < 1) {
                            corpId = "22,22";
                            sourcesL = "keymatememory,academic";
                            allsourcesL = "False";
                            api_keyL = "zwt_I2BwpavvVixbzcZ5PFOmzmBS0Ip-fw7MQFvkZQ";
                        }

                        console.log("Successfully retrieved " + results.length + " scores.");
                        for (let i = 0; i < results.length; i++) {
                            const object = results[i];
                            if(i==0) {
                                corpId = object.get('vectaracorpusid');
                                sourcesL = object.get('corpustype');
                                api_keyL = object.get('apikey');
                            }
                            else{
                                corpId = "" + corpId + "," + object.get('vectaracorpusid');
                                sourcesL = "" + sourcesL + "," + object.get('corpustype');
                            }
                        }
                        if (results.length == 1) {
                            allsourcesL = "True";
                        }
                        if (results.length >1){
                            allsourcesL = "True";
                        }


                        const {
                            // Search
                            endpoint,

                            customer_id,

                            hf_token,

                            // App
                            ux,
                            app_title,
                            enable_app_header,
                            enable_app_footer,

                            // App header
                            app_header_logo_link,
                            app_header_logo_src,
                            app_header_logo_alt,
                            app_header_logo_height,
                            app_header_learn_more_link,
                            app_header_learn_more_text,

                            // Filters

                            enable_source_filters,
                            all_sources,



                            // summary
                            summary_default_language,
                            summary_num_results,
                            summary_num_sentences,
                            summary_prompt_name,
                            summary_enable_hem,

                            // Rerank
                            rerank,
                            rerank_num_results,

                            // MMR
                            mmr,
                            mmr_num_results,
                            mmr_diversity_bias,

                            // Hybrid search
                            hybrid_search_num_words,
                            hybrid_search_lambda_long,
                            hybrid_search_lambda_short,

                            // Search header

                            search_logo_src,
                            search_logo_alt,
                            search_logo_height,
                            search_title,
                            search_description,
                            search_placeholder,

                            // Auth
                            authenticate,
                            google_client_id,

                            // Analytics
                            google_analytics_tracking_code,
                            full_story_org_id,
                            gtm_container_id,

                            // Questions
                            questions,
                        } = process.env;

                        const api_key = api_keyL;
                        const corpus_id = corpId;
                        const sources = sourcesL;
                        const search_logo_link = "https://sci-hub.bot/?memid=" + memid;

                        const all_sources2 = allsourcesL;
                        console.log(all_sources2)
                        res.send({
                            // Search
                            endpoint,
                            corpus_id, //changed corpus_id to corpId to make dynamic
                            customer_id,
                            api_key,
                            hf_token,

                            // App
                            ux,
                            app_title,
                            enable_app_header,
                            enable_app_footer,

                            // App header
                            app_header_logo_link,
                            app_header_logo_src,
                            app_header_logo_alt,
                            app_header_logo_height,
                            app_header_learn_more_link,
                            app_header_learn_more_text,

                            // Filters
                            enable_source_filters,
                            all_sources,
                            sources,

                            // Summary
                            summary_default_language,
                            summary_num_results,
                            summary_num_sentences,
                            summary_prompt_name,
                            summary_enable_hem,

                            // Hybrid search
                            hybrid_search_num_words,
                            hybrid_search_lambda_long,
                            hybrid_search_lambda_short,

                            // Rerank
                            rerank,
                            rerank_num_results,

                            // MMR
                            mmr,
                            mmr_num_results,
                            mmr_diversity_bias,

                            // Search header
                            search_logo_link,
                            search_logo_src,
                            search_logo_alt,
                            search_logo_height,
                            search_title,
                            search_description,
                            search_placeholder,

                            // Auth
                            authenticate,
                            google_client_id,

                            // Analytics
                            google_analytics_tracking_code,
                            full_story_org_id,
                            gtm_container_id,

                            // Questions
                            questions,
                        });
                    }).catch((error) => {console.log(error)});

                } catch (error) {
                    console.log("wtf")
                    console.log("Error: " + error.code + " " + error.message);
                }
            })
            .catch((error) => {
                console.log("error")
                console.log(error)
            });
    })
        .catch((error) => {
            console.log("error")
            console.log(error)
        });;

// Query object



// Do something with the returned Parse.Object values


});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

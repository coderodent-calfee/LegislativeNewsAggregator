import {Express} from 'express';

export const route = '/api/news';
export const queryParams = ['state','topic','search'];
export const routeParam = '/api/news/:id';
export const routeParams = ['id'];

export function setupNewsRouter(app : Express){

    // check here for extant id in news articles
    app.param('id', function(req, res, next, id) {
        const modified = id.toUpperCase();
        console.log("modified: ", modified);
        req.id = modified;
        // if the article exists:
        return next();
        // else
        // res.status(404).send("Sorry can't find that!");
    });
    
    
    // request with route params '/api/news/identifier'
    app.get(routeParam, (req : any, res : any) => {
        const params = {};
        routeParams.forEach((param)=>{
            if(req.params[param] !== undefined) {
                params[param] = req.params[param];
            }
        });
        console.log("params: ", params);
        const jsonResponse = JSON.stringify({server : req.url, params, isQuery:false});
        console.log("jsonResponse: ", jsonResponse);
        res.send(jsonResponse);
    });


    // request with query params '?' and '&'
    app.get(route, (req : any, res : any) => {
        const queries = {};
        queryParams.forEach((query)=>{
            if(req.query[query] !== undefined) {
                queries[query] = req.query[query];
            }
        });
        console.log("queries: ", queries);
        const jsonResponse = JSON.stringify({server : req.url, queries, isQuery:true});
        console.log("jsonResponse: ", jsonResponse);
        res.send(jsonResponse);
    });
    
    
}
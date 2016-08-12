module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'production':
            return {"DATABASE_URL": process.env.DATABASE_URL,
                    "FOO": process.env.FOO};

        default:
            return {"DATABASE_URL": "postgres://diana@localhost:5432/bid-dev",
                    "FOO": "colombia"};
    }
};


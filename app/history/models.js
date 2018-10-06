import moment from 'moment';

const HistoryModels = {
    findById(req, res, id) {
        req.getConnection((err, connection) => {
            if (err) 
                return err;
            connection.query('SELECT stat_id,stat_detail,stat_date FROM stats_users WHERE user_id = ?', id, (err, result) => {
                if (err) 
                    return err;
                res
                    .status(200)
                    .json({data: result})
            })
        })
    },
    create(req, res, data) {
        req.getConnection((err, connection) => {
            if (err) 
                return err;
            connection.query('INSERT INTO stats_users SET ?', data, (err, result) => {
                if (err) 
                    return err;
                res.status(201).json({_result: result})

            })
        })
    }
}
export default HistoryModels;
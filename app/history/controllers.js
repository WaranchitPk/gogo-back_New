import Model from './models';
import moment from 'moment';

const HistoryControlers = {
    findById(req, res) {
        const {params: {
                id
            }} = req;
        // res.send({msg: 'Hello History'})
        Model.findById(req, res, id)
    },
    create(req, res) {
        const {body} = req;
        const data = {
            stat_detail: body.detail,
            stat_date: body.statDate,
            created_Date: moment().format('YYYY-MM-DD'),
            user_id: body.id
        };
        console.log(data.created_Date)
        Model.create(req, res, data)
    }
}
export default HistoryControlers
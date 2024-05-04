import { searchById } from "../database/dbOperation";

export async function viewProduct(req: any, res: any, next: any) {
    try {

        const { id } = req.params;
        const search_result = await searchById(id);
        next();
    } catch (error) {

        res.send(`<strong>User not found ${req.params.id} <a href="/"> <---go back</a></strong>`)
    }
}
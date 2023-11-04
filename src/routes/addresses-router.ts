import {Request, Response, Router} from 'express';
import {addressesRepository} from '../repositories';


export const addressesRoutes = Router({})

addressesRoutes.get('/', (req: Request, res: Response) => {
    res.send(addressesRepository.getAddresses())
})
addressesRoutes.get('/:id', (req: Request, res: Response) => {
    const address = addressesRepository.getAddressesById(+req.params.id)

    if (address) {
        res.send(address)
    } else {
        res.status(404).send('Sorry address does not exist :(')
    }
})
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Meteo from './Meteo';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import {render } from '@testing-library/react';
import { screen } from '@testing-library/react';

function Wrapper(){
    return <Provider store={store}><Meteo/></Provider>
}

jest.mock('axios');

describe('Meteo component', () => {

    test('renders the component with weather data', async () => {
        axios.get.mockResolvedValue({data : {
            name : 'Paris',
            main : { temp : 25} ,
            weather : [{description : 'sunny'}],
            coord : {lon : 10, lat : 10}   
        }})

        render(Wrapper());


        await screen.findByText('Paris')

        expect(screen.getByText('Paris')).toBeInTheDocument()

    })

});
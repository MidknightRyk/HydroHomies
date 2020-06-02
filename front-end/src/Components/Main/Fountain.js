import React from "react";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export const Fountain = () => (
    <Carousel
        slidesPerPage={2}
        arrows
        infinite
    >
        <img src={"https://instagram.fsyd3-1.fna.fbcdn.net/v/t51.2885-15/e35/89271564_197225711691075_6216866783474562588_n.jpg?_nc_ht=instagram.fsyd3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=HY6gtbMwpvsAX8ujIro&oh=42acc7b0453fa1ebebe6e4b48e6d3927&oe=5F00BBEA"} />
        <img src={"https://instagram.fsyd3-1.fna.fbcdn.net/v/t51.2885-15/e35/87225050_182458953086637_2311254261082711070_n.jpg?_nc_ht=instagram.fsyd3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=jlSsj9rHZeQAX_f4L0R&oh=a58d38574b2de731ccc50ad21dc39ecc&oe=5F013BBD"} />
        <img src={"https://instagram.fsyd3-1.fna.fbcdn.net/v/t51.2885-15/e35/83084857_205984013876290_7098924246053673749_n.jpg?_nc_ht=instagram.fsyd3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ZguV_ecp-kcAX9rQrfp&oh=77755bf0555676d638f0b09a2aff1e0d&oe=5EFE8B27"} />
    </Carousel>
)

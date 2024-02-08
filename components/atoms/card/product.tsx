import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { fontSize } from '@/components/constant'
import { device } from '@/components/media'

type TProduct = {
    image: string
    name: string
    price: number
    agents: Array<string>
    rate: number,
    sold: number
}

interface IProps { data: TProduct, className?: string }

const ProductCard = ({ data, className = '' }: IProps) => {
    return (
        <SProductCard>
            <Image src={data.image} height={200} width={200} alt='product-image' />
            <div className='description'>
                <p className='name'>{data.name}</p>
                <p className='price'>{`Rp.${data.price.toLocaleString('id-ID')}`}</p>
                <div className='location-wrapper'>
                    <i className='bx bxs-map'></i>
                    <a href='#' className='location'>
                    {
                        data.agents.map((v, k) => {
                            if (k === 0) {
                            return v
                            }
                            return `,${v}`
                        })
                    }
                    </a>
                </div>
                <div className='rate-wrapper'>
                    <i className='bx bxs-star'></i>
                    <p>{data.rate}</p>
                    <span>|</span>
                    <p>{`${data.sold} terjual`}</p>
                </div>
            </div>
        </SProductCard>
    )
}

export default ProductCard

const SProductCard = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    background-color: white;
    height: 160px;
    width: 300px;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);

    @media ${device.tablet} {
        width: 200px;
        height: 320px;
        flex-direction: column;
    }

    img {
        width: 0px;
        height: 100%;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        flex: 1;
        object-fit: cover;
        object-position: center center;

        
        @media ${device.tablet} {
            flex: 3;
            width: 100%;
            height: 0px;
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
        }
    }

    .description {
        flex: 1;
        width: 100%;
        height: 100%;
        padding: 0.1rem 0.5rem;

        @media ${device.tablet} {
            flex: 2;
        }

        .name {
            margin-bottom: 0;
            font-weight: 500;
            font-size: 0.7em;
            color: var(--text-dark);

            @media ${device.tablet} {
                font-size: ${fontSize.small};
            }
        }

        .price {
            margin-bottom: 0.25rem;
            font-size: 0.9em;
            font-weight: 600;
            color: var(--primary-color);

            @media ${device.tablet} {
                font-size: ${fontSize.normal};
            }
        }

        .location-wrapper {
            display: flex;
            align-items: center;
            margin-bottom: 0.25rem;

            i {
                color: rgb(76 175 80);
                margin-right: 0.25rem;
            }

            .location {
                color: var(--text-dark-light);
                font-size: ${fontSize.extraSmall};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                &:hover {
                text-decoration: underline;
                }
            }
        }

        .rate-wrapper {
            display: flex;
            align-items: center;
            color: var(--text-dark-light);

            i {
                color: rgb(255 152 0);
                margin-right: 0.25rem;
            }

            span {
                margin-left: 0.25rem;
                margin-right: 0.25rem;
                font-size: 0.6em;

                @media ${device.tablet} {
                    font-size: 0.7em;
                }
            }

            p {
                margin-bottom: 0;
                font-size: 0.6em;

                @media ${device.tablet} {
                    font-size: 0.7em;
                }
            }
        }
    }
`
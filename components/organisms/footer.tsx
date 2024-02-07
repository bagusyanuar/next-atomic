import React from 'react'
import styled from 'styled-components'
import { fontSize } from '@/components/constant'
import { device } from '@/components/media'

const Footer = () => {
    return (
        <FooterWrapper>
            <h1 className='tagline'>Yuspin - Cloth Your Napkins</h1>
            <p className='description'>"Pilihan Tepat Wanita Cermat" Yuspin adalah pembalut wanita yg sehat dan hemat yang di desain khusus dari bahan kaos yg nyaman dan dipadukan dengan bahan handuk kualitas terbaik sehingga memiliki daya serap tinggi, dan bahan pelapis anti bocor khusus yang memberi kenyamanan saat dipakai sehingga tidak mudah bocor.</p>
            <div className='divider'></div>
            <div className='information'>
                <div className='navigation'>
                    <p className='title'>YUSPIN</p>
                    <a href='#' className='link'>PRODUK</a>
                    <a href='#' className='link'>KOMUNITAS</a>
                    <a href='#' className='link'>PENDAFTARAN MEMBER</a>
                    <a href='#' className='link'>TENTANG YUSPIN</a>
                </div>
                <div className='contact'>
                    <p className='title'>KONTAK</p>
                    <div className='item-wrapper'>
                        <i className='bx bx-envelope'></i>
                        <p className='item'>yuspinofficial@gmail.com</p>
                    </div>
                    <div className='item-wrapper'>
                        <i className='bx bxl-whatsapp'></i>
                        <p className='item'>0813-2755-5004</p>
                    </div>
                    <div className='item-wrapper'>
                        <i className='bx bxs-map'></i>
                        <p className='item'>CV YUSPIN (Jl Raya Padokan No 008, Sawahan, Ngemplak, Boyolali)</p>
                    </div>
                </div>
                <div className='social'>
                    <p className='title'>SOSIAL MEDIA</p>
                    <div className='item-wrapper'>
                        <a href='#' className='item'>
                            <i className='bx bxl-facebook-circle' ></i>
                        </a>
                        <a href='#' className='item'>
                            <i className='bx bxl-instagram'></i>
                        </a>
                        <a href='#' className='item'>
                            <i className='bx bxl-tiktok' ></i>
                        </a>
                        <a href='#' className='item'>
                            <i className='bx bxl-youtube' ></i>
                        </a>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.div`
    width: 100%;
    padding: 2rem 2rem;
    background-color: var(--primary-color);
    color: white;

    @media ${device.tablet} {
        padding: 3rem 5rem;
    }

    .tagline {
        font-size: ${fontSize.large};
        font-weight: 600;
        margin-bottom: 2rem;
    }

    .description {
        font-size: ${fontSize.normal};
        text-align: justify;
        margin-bottom: 0;
    }

    .divider {
        margin: 3rem 0;
        border-bottom: 2px solid white;
    }

    .information {
        width: 100%;
        display: block;
        
        @media ${device.tablet} {
            display: flex;
            gap: 1rem;
        }
        
        .title {
            color: rgba(255, 255, 255, 0.5);
            font-size: ${fontSize.normal};
            margin-bottom: 1rem;
        }

        .navigation {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
            align-items: center;

            @media ${device.tablet} {
                margin-bottom: 0;
                align-items: start;
            }

            .link {
                text-decoration: none;
                font-size: ${fontSize.normal};
                margin-bottom: 0.75rem;
            }
        }

        .contact {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
            align-items: center;
            
            @media ${device.tablet} {
                margin-bottom: 0;
                align-items: start;
            }

            .item-wrapper {
                display: flex;
                align-items: start;
                margin-bottom: 0.75rem;

                i {
                    font-size: ${fontSize.normal};
                    margin-right: 0.5rem;
                    line-height: 1.5;
                }

                .item {
                    font-size: ${fontSize.normal};
                    text-align: justify;
                }
            }
        }

        .social {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
            align-items: center;

            @media ${device.tablet} {
                margin-bottom: 0;
                align-items: start;
            }
            
            .item-wrapper {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                .item {
                    font-size: ${fontSize.normal};
                }
            }
        }
    }
`
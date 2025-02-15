import React from 'react';
import TypeIt from 'typeit-react';

export default function Hero() {
    const Title = ({ children }) => {
        return <strong style={{ fontSize: '70px' }}>{children}</strong>;
    };
    const Text = ({ children }) => {
        return <strong style={{ fontSize: '22px' }}>{children}</strong>;
    };
    const MobileTitle = ({ children }) => {
        return <strong style={{ fontSize: '40px' }}>{children}</strong>;
    };
    const MobileText = ({ children }) => {
        return <strong style={{ fontSize: '14px' }}>{children}</strong>;
    };
    return (
        <>
            <div className='h-full hidden tracking-wider items-center justify-center pb-20 pt-16 text-white sm:flex flex-row' id='hero'>
                <TypeIt
                    options={{
                        cursor: false,
                    }}
                >
                    <Title>Hello! I'm Joel.</Title>
                    <br />
                    <Text>I like doing hard things.</Text>
                </TypeIt>
            </div>

            <div className='h-full flex flex-row tracking-wider items-center justify-center text-white sm:hidden ' id='hero'>
                <TypeIt
                    options={{
                        cursor: false,
                    }}
                >
                    <MobileTitle>Hello! I'm Joel.</MobileTitle>
                    <br />
                    <MobileText>I like doing hard things.</MobileText>
                </TypeIt>
            </div>
        </>
    );
}

import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SingleCard from '../../components/Card/singleCard';



export default function DisplaySingleCard() {
    return (

        <PrimaryLayout>
            <SingleCard/>
        </PrimaryLayout>
    )

}
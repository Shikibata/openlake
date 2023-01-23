import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import BuyCard from '../../components/Card/buyCard';

export default function BuySingleCard() {
  return (
    <PrimaryLayout>
      <BuyCard />
    </PrimaryLayout>
  );
}

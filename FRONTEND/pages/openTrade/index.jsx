import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import BuySingleCard from '../../components/Card/singleCard';

export default function BuySingleCard() {
  return (
    <PrimaryLayout>
      <SingleCard />
    </PrimaryLayout>
  );
}

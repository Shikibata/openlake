import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SearchResults from '../../components/Card/SearchResults';

export default function DisplaySingleCard() {
  return (
    <PrimaryLayout>
      <SearchResults />
    </PrimaryLayout>
  );
}

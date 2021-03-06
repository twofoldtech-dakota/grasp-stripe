import TradesList from '@/components/trades/TradesList';
import { getTrades } from 'utils/supabase-client';
import { Trade } from 'types';
import { GetStaticPropsResult } from 'next';
import ContentWrapper from '@/components/ui/ContentWrapper/ContentWrapper';
import Stats from '@/components/stats/Stats';
import Layout from '@/components/Layout';

interface Props {
    trades: Trade[];
}

export default function TradesPage({ trades }: Props) {
    return (
        <Layout>
            <ContentWrapper title="Dashboard">
                <Stats />
                <TradesList trades={trades} title="Recent Trades" />
            </ContentWrapper>
        </Layout>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const trades = await getTrades();

    return {
        props: {
            trades
        }
    };
}

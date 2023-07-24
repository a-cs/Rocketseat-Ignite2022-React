import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
    PriceHighlight,
    TransactionsContainer,
    TransactionsTable,
} from './style'
import {
    Transaction,
    TransactionsContext,
} from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map((transaction: Transaction) => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">
                                        {transaction.description}
                                    </td>
                                    <td>
                                        <PriceHighlight
                                            variant={transaction.type}
                                        >
                                            {transaction.type === 'outcome' &&
                                                '- '}
                                            {priceFormatter.format(
                                                transaction.price,
                                            )}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>
                                        {dateFormatter.format(
                                            new Date(transaction.createdAt),
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}

import { useContextSelector } from 'use-context-selector'
import {
    CloseButton,
    Content,
    Overlay,
    TransactionType,
    TransactionTypeButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import { ArrowCircleUp, ArrowCircleDown, X } from 'phosphor-react'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const createTransaction = useContextSelector(
        TransactionsContext,
        (context) => {
            return context.createTransaction
        },
    )
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<newTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income',
        },
    })

    async function handleCreateNewTransction(data: newTransactionFormInputs) {
        await createTransaction(data)
        reset()
    }
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                <form onSubmit={handleSubmit(handleCreateNewTransction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        {...register('description')}
                    />
                    <input
                        type="number"
                        placeholder="Preço"
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            console.log('props:', field.value)

                            return (
                                <TransactionType
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <TransactionTypeButton
                                        variant="income"
                                        value="income"
                                    >
                                        {' '}
                                        <ArrowCircleUp size={24} /> Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton
                                        variant="outcome"
                                        value="outcome"
                                    >
                                        {' '}
                                        <ArrowCircleDown size={24} /> Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}
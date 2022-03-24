import {Transactioncurrency} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTransactioncurrencyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Transactioncurrency {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Transactioncurrency();
}

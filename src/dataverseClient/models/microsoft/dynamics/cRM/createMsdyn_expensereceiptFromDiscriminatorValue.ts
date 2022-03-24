import {Msdyn_expensereceipt} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_expensereceiptFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_expensereceipt {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_expensereceipt();
}

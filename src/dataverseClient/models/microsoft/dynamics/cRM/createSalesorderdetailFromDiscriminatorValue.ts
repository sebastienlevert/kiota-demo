import {Salesorderdetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSalesorderdetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Salesorderdetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Salesorderdetail();
}

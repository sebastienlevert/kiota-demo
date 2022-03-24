import {Salesorder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSalesorderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Salesorder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Salesorder();
}

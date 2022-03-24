import {Bulkdeletefailure} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBulkdeletefailureFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bulkdeletefailure {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bulkdeletefailure();
}

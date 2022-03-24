import {Bookableresourcecategoryassn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookableresourcecategoryassnFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bookableresourcecategoryassn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bookableresourcecategoryassn();
}

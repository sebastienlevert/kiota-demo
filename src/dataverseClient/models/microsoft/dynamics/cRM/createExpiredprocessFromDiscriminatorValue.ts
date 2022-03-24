import {Expiredprocess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExpiredprocessFromDiscriminatorValue(parseNode: ParseNode | undefined) : Expiredprocess {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Expiredprocess();
}

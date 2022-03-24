import {Newprocess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNewprocessFromDiscriminatorValue(parseNode: ParseNode | undefined) : Newprocess {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Newprocess();
}

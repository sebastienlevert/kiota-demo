import {Serviceplan} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceplanFromDiscriminatorValue(parseNode: ParseNode | undefined) : Serviceplan {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Serviceplan();
}

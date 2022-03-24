import {Fax} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFaxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fax {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fax();
}

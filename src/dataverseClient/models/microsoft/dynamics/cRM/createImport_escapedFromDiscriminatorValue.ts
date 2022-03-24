import {Import_escaped} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImport_escapedFromDiscriminatorValue(parseNode: ParseNode | undefined) : Import_escaped {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Import_escaped();
}

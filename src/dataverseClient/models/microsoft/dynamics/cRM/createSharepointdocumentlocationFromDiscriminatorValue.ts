import {Sharepointdocumentlocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharepointdocumentlocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sharepointdocumentlocation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sharepointdocumentlocation();
}

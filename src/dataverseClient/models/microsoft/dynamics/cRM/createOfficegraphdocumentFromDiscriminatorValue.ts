import {Officegraphdocument} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOfficegraphdocumentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Officegraphdocument {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Officegraphdocument();
}

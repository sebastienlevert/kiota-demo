import {Teamtemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamtemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Teamtemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Teamtemplate();
}

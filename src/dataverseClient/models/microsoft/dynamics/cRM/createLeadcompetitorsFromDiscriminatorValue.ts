import {Leadcompetitors} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLeadcompetitorsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Leadcompetitors {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Leadcompetitors();
}

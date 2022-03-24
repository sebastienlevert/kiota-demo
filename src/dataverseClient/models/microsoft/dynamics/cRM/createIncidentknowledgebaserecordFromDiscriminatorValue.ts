import {Incidentknowledgebaserecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncidentknowledgebaserecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : Incidentknowledgebaserecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Incidentknowledgebaserecord();
}

import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_iotalertFromDiscriminatorValue} from './createMsdyn_iotalertFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {createWorkflowlogFromDiscriminatorValue} from './createWorkflowlogFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Incident, Mailboxtrackingfolder, Msdyn_iotalert, Msdyn_workorder, Organization, Principalobjectattributeaccess, Processsession, Processstage, Syncerror, Systemuser, Workflow, Workflowlog} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b extends Crmbaseentity implements Parsable {
    private __activestageid_value?: string | undefined;
    private __bpf_incidentid_value?: string | undefined;
    private __bpf_msdyn_iotalertid_value?: string | undefined;
    private __bpf_msdyn_workorderid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __processid_value?: string | undefined;
    private _activestageid?: Processstage | undefined;
    private _activestagestartedon?: Date | undefined;
    private _bpf_duration?: number | undefined;
    private _bpf_incidentid?: Incident | undefined;
    private _bpf_msdyn_iotalertid?: Msdyn_iotalert | undefined;
    private _bpf_msdyn_workorderid?: Msdyn_workorder | undefined;
    private _bpf_name?: string | undefined;
    private _businessprocessflowinstanceid?: string | undefined;
    private _completedon?: Date | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession?: Processsession[] | undefined;
    private _msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs?: Workflowlog[] | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _processid?: Workflow | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _traversedpath?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _activestageid_value property value. 
     * @returns a string
     */
    public get _activestageid_value() {
        return this.__activestageid_value;
    };
    /**
     * Sets the _activestageid_value property value. 
     * @param value Value to set for the _activestageid_value property.
     */
    public set _activestageid_value(value: string | undefined) {
        this.__activestageid_value = value;
    };
    /**
     * Gets the _bpf_incidentid_value property value. 
     * @returns a string
     */
    public get _bpf_incidentid_value() {
        return this.__bpf_incidentid_value;
    };
    /**
     * Sets the _bpf_incidentid_value property value. 
     * @param value Value to set for the _bpf_incidentid_value property.
     */
    public set _bpf_incidentid_value(value: string | undefined) {
        this.__bpf_incidentid_value = value;
    };
    /**
     * Gets the _bpf_msdyn_iotalertid_value property value. 
     * @returns a string
     */
    public get _bpf_msdyn_iotalertid_value() {
        return this.__bpf_msdyn_iotalertid_value;
    };
    /**
     * Sets the _bpf_msdyn_iotalertid_value property value. 
     * @param value Value to set for the _bpf_msdyn_iotalertid_value property.
     */
    public set _bpf_msdyn_iotalertid_value(value: string | undefined) {
        this.__bpf_msdyn_iotalertid_value = value;
    };
    /**
     * Gets the _bpf_msdyn_workorderid_value property value. 
     * @returns a string
     */
    public get _bpf_msdyn_workorderid_value() {
        return this.__bpf_msdyn_workorderid_value;
    };
    /**
     * Sets the _bpf_msdyn_workorderid_value property value. 
     * @param value Value to set for the _bpf_msdyn_workorderid_value property.
     */
    public set _bpf_msdyn_workorderid_value(value: string | undefined) {
        this.__bpf_msdyn_workorderid_value = value;
    };
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the _processid_value property value. 
     * @returns a string
     */
    public get _processid_value() {
        return this.__processid_value;
    };
    /**
     * Sets the _processid_value property value. 
     * @param value Value to set for the _processid_value property.
     */
    public set _processid_value(value: string | undefined) {
        this.__processid_value = value;
    };
    /**
     * Gets the activestageid property value. 
     * @returns a processstage
     */
    public get activestageid() {
        return this._activestageid;
    };
    /**
     * Sets the activestageid property value. 
     * @param value Value to set for the activestageid property.
     */
    public set activestageid(value: Processstage | undefined) {
        this._activestageid = value;
    };
    /**
     * Gets the activestagestartedon property value. 
     * @returns a Date
     */
    public get activestagestartedon() {
        return this._activestagestartedon;
    };
    /**
     * Sets the activestagestartedon property value. 
     * @param value Value to set for the activestagestartedon property.
     */
    public set activestagestartedon(value: Date | undefined) {
        this._activestagestartedon = value;
    };
    /**
     * Gets the bpf_duration property value. 
     * @returns a integer
     */
    public get bpf_duration() {
        return this._bpf_duration;
    };
    /**
     * Sets the bpf_duration property value. 
     * @param value Value to set for the bpf_duration property.
     */
    public set bpf_duration(value: number | undefined) {
        this._bpf_duration = value;
    };
    /**
     * Gets the bpf_incidentid property value. 
     * @returns a incident
     */
    public get bpf_incidentid() {
        return this._bpf_incidentid;
    };
    /**
     * Sets the bpf_incidentid property value. 
     * @param value Value to set for the bpf_incidentid property.
     */
    public set bpf_incidentid(value: Incident | undefined) {
        this._bpf_incidentid = value;
    };
    /**
     * Gets the bpf_msdyn_iotalertid property value. 
     * @returns a msdyn_iotalert
     */
    public get bpf_msdyn_iotalertid() {
        return this._bpf_msdyn_iotalertid;
    };
    /**
     * Sets the bpf_msdyn_iotalertid property value. 
     * @param value Value to set for the bpf_msdyn_iotalertid property.
     */
    public set bpf_msdyn_iotalertid(value: Msdyn_iotalert | undefined) {
        this._bpf_msdyn_iotalertid = value;
    };
    /**
     * Gets the bpf_msdyn_workorderid property value. 
     * @returns a msdyn_workorder
     */
    public get bpf_msdyn_workorderid() {
        return this._bpf_msdyn_workorderid;
    };
    /**
     * Sets the bpf_msdyn_workorderid property value. 
     * @param value Value to set for the bpf_msdyn_workorderid property.
     */
    public set bpf_msdyn_workorderid(value: Msdyn_workorder | undefined) {
        this._bpf_msdyn_workorderid = value;
    };
    /**
     * Gets the bpf_name property value. 
     * @returns a string
     */
    public get bpf_name() {
        return this._bpf_name;
    };
    /**
     * Sets the bpf_name property value. 
     * @param value Value to set for the bpf_name property.
     */
    public set bpf_name(value: string | undefined) {
        this._bpf_name = value;
    };
    /**
     * Gets the businessprocessflowinstanceid property value. 
     * @returns a string
     */
    public get businessprocessflowinstanceid() {
        return this._businessprocessflowinstanceid;
    };
    /**
     * Sets the businessprocessflowinstanceid property value. 
     * @param value Value to set for the businessprocessflowinstanceid property.
     */
    public set businessprocessflowinstanceid(value: string | undefined) {
        this._businessprocessflowinstanceid = value;
    };
    /**
     * Gets the completedon property value. 
     * @returns a Date
     */
    public get completedon() {
        return this._completedon;
    };
    /**
     * Sets the completedon property value. 
     * @param value Value to set for the completedon property.
     */
    public set completedon(value: Date | undefined) {
        this._completedon = value;
    };
    /**
     * Instantiates a new msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_activestageid_value": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b)._activestageid_value = n.getStringValue(); },
            "_bpf_incidentid_value": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b)._bpf_incidentid_value = n.getStringValue(); },
            "_bpf_msdyn_iotalertid_value": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b)._bpf_msdyn_iotalertid_value = n.getStringValue(); },
            "_bpf_msdyn_workorderid_value": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b)._bpf_msdyn_workorderid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b)._organizationid_value = n.getStringValue(); },
            "_processid_value": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b)._processid_value = n.getStringValue(); },
            "activestageid": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).activestageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "activestagestartedon": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).activestagestartedon = n.getDateValue(); },
            "bpf_duration": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).bpf_duration = n.getNumberValue(); },
            "bpf_incidentid": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).bpf_incidentid = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "bpf_msdyn_iotalertid": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).bpf_msdyn_iotalertid = n.getObjectValue<Msdyn_iotalert>(createMsdyn_iotalertFromDiscriminatorValue); },
            "bpf_msdyn_workorderid": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).bpf_msdyn_workorderid = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "bpf_name": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).bpf_name = n.getStringValue(); },
            "businessprocessflowinstanceid": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).businessprocessflowinstanceid = n.getStringValue(); },
            "completedon": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).completedon = n.getDateValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs = n.getCollectionOfObjectValues<Workflowlog>(createWorkflowlogFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).overriddencreatedon = n.getDateValue(); },
            "processid": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).processid = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).timezoneruleversionnumber = n.getNumberValue(); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations() {
        return this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations;
    };
    /**
     * Sets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations property value. 
     * @param value Value to set for the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations property.
     */
    public set msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures() {
        return this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures property.
     */
    public set msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders() {
        return this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders property.
     */
    public set msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses() {
        return this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession() {
        return this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession;
    };
    /**
     * Sets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession property value. 
     * @param value Value to set for the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession property.
     */
    public set msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession = value;
    };
    /**
     * Gets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors() {
        return this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors;
    };
    /**
     * Sets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors property value. 
     * @param value Value to set for the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors property.
     */
    public set msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors = value;
    };
    /**
     * Gets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs property value. 
     * @returns a workflowlog
     */
    public get msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs() {
        return this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs;
    };
    /**
     * Sets the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs property value. 
     * @param value Value to set for the msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs property.
     */
    public set msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs(value: Workflowlog[] | undefined) {
        this._msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the processid property value. 
     * @returns a workflow
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: Workflow | undefined) {
        this._processid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_activestageid_value", this._activestageid_value);
        writer.writeStringValue("_bpf_incidentid_value", this._bpf_incidentid_value);
        writer.writeStringValue("_bpf_msdyn_iotalertid_value", this._bpf_msdyn_iotalertid_value);
        writer.writeStringValue("_bpf_msdyn_workorderid_value", this._bpf_msdyn_workorderid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_processid_value", this._processid_value);
        writer.writeObjectValue<Processstage>("activestageid", this.activestageid);
        writer.writeDateValue("activestagestartedon", this.activestagestartedon);
        writer.writeNumberValue("bpf_duration", this.bpf_duration);
        writer.writeObjectValue<Incident>("bpf_incidentid", this.bpf_incidentid);
        writer.writeObjectValue<Msdyn_iotalert>("bpf_msdyn_iotalertid", this.bpf_msdyn_iotalertid);
        writer.writeObjectValue<Msdyn_workorder>("bpf_msdyn_workorderid", this.bpf_msdyn_workorderid);
        writer.writeStringValue("bpf_name", this.bpf_name);
        writer.writeStringValue("businessprocessflowinstanceid", this.businessprocessflowinstanceid);
        writer.writeDateValue("completedon", this.completedon);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations", this.msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures", this.msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders", this.msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses", this.msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession", this.msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors", this.msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors);
        writer.writeCollectionOfObjectValues<Workflowlog>("msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs", this.msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Workflow>("processid", this.processid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}

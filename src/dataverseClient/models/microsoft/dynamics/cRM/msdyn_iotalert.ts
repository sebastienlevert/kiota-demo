import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_bpf_477c16f59170487b8b4dc895c5dcd09bFromDiscriminatorValue} from './createMsdyn_bpf_477c16f59170487b8b4dc895c5dcd09bFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_incidenttypeFromDiscriminatorValue} from './createMsdyn_incidenttypeFromDiscriminatorValue';
import {createMsdyn_iotalertFromDiscriminatorValue} from './createMsdyn_iotalertFromDiscriminatorValue';
import {createMsdyn_iotdevicecommandFromDiscriminatorValue} from './createMsdyn_iotdevicecommandFromDiscriminatorValue';
import {createMsdyn_iotdeviceFromDiscriminatorValue} from './createMsdyn_iotdeviceFromDiscriminatorValue';
import {createMsdyn_iottocaseprocessFromDiscriminatorValue} from './createMsdyn_iottocaseprocessFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Incident, Mailboxtrackingfolder, Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b, Msdyn_customerasset, Msdyn_incidenttype, Msdyn_iotdevice, Msdyn_iotdevicecommand, Msdyn_iottocaseprocess, Msdyn_workorder, Principal, Principalobjectattributeaccess, Processsession, Processstage, Queueitem, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_iotalert extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_case_value?: string | undefined;
    private __msdyn_customerasset_value?: string | undefined;
    private __msdyn_device_value?: string | undefined;
    private __msdyn_lastcommandsent_value?: string | undefined;
    private __msdyn_parentalert_value?: string | undefined;
    private __msdyn_suggestedincidenttype_value?: string | undefined;
    private __msdyn_workorder_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __stageid_value?: string | undefined;
    private _bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b?: Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b[] | undefined;
    private _bpf_msdyn_iotalert_msdyn_iottocaseprocess?: Msdyn_iottocaseprocess[] | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_alertdata?: string | undefined;
    private _msdyn_alertpriorityscore?: number | undefined;
    private _msdyn_alerttime?: Date | undefined;
    private _msdyn_alerttoken?: string | undefined;
    private _msdyn_alerttype?: number | undefined;
    private _msdyn_alerturl?: string | undefined;
    private _msdyn_Case?: Incident | undefined;
    private _msdyn_CustomerAsset?: Msdyn_customerasset | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_Device?: Msdyn_iotdevice | undefined;
    private _msdyn_deviceid?: string | undefined;
    private _msdyn_iotalert_Annotations?: Annotation[] | undefined;
    private _msdyn_iotalert_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_iotalert_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_iotalert_connections1?: Connection[] | undefined;
    private _msdyn_iotalert_connections2?: Connection[] | undefined;
    private _msdyn_iotalert_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_iotalert_msdyn_iotalert?: Msdyn_iotalert[] | undefined;
    private _msdyn_iotalert_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_iotalert_ProcessSession?: Processsession[] | undefined;
    private _msdyn_iotalert_QueueItems?: Queueitem[] | undefined;
    private _msdyn_iotalert_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_iotalertid?: string | undefined;
    private _msdyn_LastCommandSent?: Msdyn_iotdevicecommand | undefined;
    private _msdyn_lastcommandsenttime?: Date | undefined;
    private _msdyn_msdyn_iotalert_incident_IoTAlert?: Incident[] | undefined;
    private _msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert?: Msdyn_iotdevicecommand[] | undefined;
    private _msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert?: Msdyn_workorder[] | undefined;
    private _msdyn_ParentAlert?: Msdyn_iotalert | undefined;
    private _msdyn_parentalerttoken?: string | undefined;
    private _msdyn_suggestedincidenttype?: Msdyn_incidenttype | undefined;
    private _msdyn_suggestedpriority?: number | undefined;
    private _msdyn_Workorder?: Msdyn_workorder | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _stageid?: Processstage | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _traversedpath?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _msdyn_case_value property value. 
     * @returns a string
     */
    public get _msdyn_case_value() {
        return this.__msdyn_case_value;
    };
    /**
     * Sets the _msdyn_case_value property value. 
     * @param value Value to set for the _msdyn_case_value property.
     */
    public set _msdyn_case_value(value: string | undefined) {
        this.__msdyn_case_value = value;
    };
    /**
     * Gets the _msdyn_customerasset_value property value. 
     * @returns a string
     */
    public get _msdyn_customerasset_value() {
        return this.__msdyn_customerasset_value;
    };
    /**
     * Sets the _msdyn_customerasset_value property value. 
     * @param value Value to set for the _msdyn_customerasset_value property.
     */
    public set _msdyn_customerasset_value(value: string | undefined) {
        this.__msdyn_customerasset_value = value;
    };
    /**
     * Gets the _msdyn_device_value property value. 
     * @returns a string
     */
    public get _msdyn_device_value() {
        return this.__msdyn_device_value;
    };
    /**
     * Sets the _msdyn_device_value property value. 
     * @param value Value to set for the _msdyn_device_value property.
     */
    public set _msdyn_device_value(value: string | undefined) {
        this.__msdyn_device_value = value;
    };
    /**
     * Gets the _msdyn_lastcommandsent_value property value. 
     * @returns a string
     */
    public get _msdyn_lastcommandsent_value() {
        return this.__msdyn_lastcommandsent_value;
    };
    /**
     * Sets the _msdyn_lastcommandsent_value property value. 
     * @param value Value to set for the _msdyn_lastcommandsent_value property.
     */
    public set _msdyn_lastcommandsent_value(value: string | undefined) {
        this.__msdyn_lastcommandsent_value = value;
    };
    /**
     * Gets the _msdyn_parentalert_value property value. 
     * @returns a string
     */
    public get _msdyn_parentalert_value() {
        return this.__msdyn_parentalert_value;
    };
    /**
     * Sets the _msdyn_parentalert_value property value. 
     * @param value Value to set for the _msdyn_parentalert_value property.
     */
    public set _msdyn_parentalert_value(value: string | undefined) {
        this.__msdyn_parentalert_value = value;
    };
    /**
     * Gets the _msdyn_suggestedincidenttype_value property value. 
     * @returns a string
     */
    public get _msdyn_suggestedincidenttype_value() {
        return this.__msdyn_suggestedincidenttype_value;
    };
    /**
     * Sets the _msdyn_suggestedincidenttype_value property value. 
     * @param value Value to set for the _msdyn_suggestedincidenttype_value property.
     */
    public set _msdyn_suggestedincidenttype_value(value: string | undefined) {
        this.__msdyn_suggestedincidenttype_value = value;
    };
    /**
     * Gets the _msdyn_workorder_value property value. 
     * @returns a string
     */
    public get _msdyn_workorder_value() {
        return this.__msdyn_workorder_value;
    };
    /**
     * Sets the _msdyn_workorder_value property value. 
     * @param value Value to set for the _msdyn_workorder_value property.
     */
    public set _msdyn_workorder_value(value: string | undefined) {
        this.__msdyn_workorder_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _stageid_value property value. 
     * @returns a string
     */
    public get _stageid_value() {
        return this.__stageid_value;
    };
    /**
     * Sets the _stageid_value property value. 
     * @param value Value to set for the _stageid_value property.
     */
    public set _stageid_value(value: string | undefined) {
        this.__stageid_value = value;
    };
    /**
     * Gets the bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b property value. 
     * @returns a msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b
     */
    public get bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b() {
        return this._bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b;
    };
    /**
     * Sets the bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b property value. 
     * @param value Value to set for the bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b property.
     */
    public set bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b(value: Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b[] | undefined) {
        this._bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b = value;
    };
    /**
     * Gets the bpf_msdyn_iotalert_msdyn_iottocaseprocess property value. 
     * @returns a msdyn_iottocaseprocess
     */
    public get bpf_msdyn_iotalert_msdyn_iottocaseprocess() {
        return this._bpf_msdyn_iotalert_msdyn_iottocaseprocess;
    };
    /**
     * Sets the bpf_msdyn_iotalert_msdyn_iottocaseprocess property value. 
     * @param value Value to set for the bpf_msdyn_iotalert_msdyn_iottocaseprocess property.
     */
    public set bpf_msdyn_iotalert_msdyn_iottocaseprocess(value: Msdyn_iottocaseprocess[] | undefined) {
        this._bpf_msdyn_iotalert_msdyn_iottocaseprocess = value;
    };
    /**
     * Instantiates a new msdyn_iotalert and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_iotalert)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotalert)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_iotalert)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotalert)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_case_value": (o, n) => { (o as unknown as Msdyn_iotalert)._msdyn_case_value = n.getStringValue(); },
            "_msdyn_customerasset_value": (o, n) => { (o as unknown as Msdyn_iotalert)._msdyn_customerasset_value = n.getStringValue(); },
            "_msdyn_device_value": (o, n) => { (o as unknown as Msdyn_iotalert)._msdyn_device_value = n.getStringValue(); },
            "_msdyn_lastcommandsent_value": (o, n) => { (o as unknown as Msdyn_iotalert)._msdyn_lastcommandsent_value = n.getStringValue(); },
            "_msdyn_parentalert_value": (o, n) => { (o as unknown as Msdyn_iotalert)._msdyn_parentalert_value = n.getStringValue(); },
            "_msdyn_suggestedincidenttype_value": (o, n) => { (o as unknown as Msdyn_iotalert)._msdyn_suggestedincidenttype_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_iotalert)._msdyn_workorder_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_iotalert)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_iotalert)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_iotalert)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_iotalert)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyn_iotalert)._stageid_value = n.getStringValue(); },
            "bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b": (o, n) => { (o as unknown as Msdyn_iotalert).bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b = n.getCollectionOfObjectValues<Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b>(createMsdyn_bpf_477c16f59170487b8b4dc895c5dcd09bFromDiscriminatorValue); },
            "bpf_msdyn_iotalert_msdyn_iottocaseprocess": (o, n) => { (o as unknown as Msdyn_iotalert).bpf_msdyn_iotalert_msdyn_iottocaseprocess = n.getCollectionOfObjectValues<Msdyn_iottocaseprocess>(createMsdyn_iottocaseprocessFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Msdyn_iotalert).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_iotalert).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_iotalert).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_iotalert).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_iotalert).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_iotalert).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_iotalert).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_alertdata": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_alertdata = n.getStringValue(); },
            "msdyn_alertpriorityscore": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_alertpriorityscore = n.getNumberValue(); },
            "msdyn_alerttime": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_alerttime = n.getDateValue(); },
            "msdyn_alerttoken": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_alerttoken = n.getStringValue(); },
            "msdyn_alerttype": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_alerttype = n.getNumberValue(); },
            "msdyn_alerturl": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_alerturl = n.getStringValue(); },
            "msdyn_Case": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_Case = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "msdyn_CustomerAsset": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_CustomerAsset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_description = n.getStringValue(); },
            "msdyn_Device": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_Device = n.getObjectValue<Msdyn_iotdevice>(createMsdyn_iotdeviceFromDiscriminatorValue); },
            "msdyn_deviceid": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_deviceid = n.getStringValue(); },
            "msdyn_iotalert_Annotations": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_iotalert_AsyncOperations": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_iotalert_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_iotalert_connections1": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_iotalert_connections2": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_iotalert_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_iotalert_msdyn_iotalert": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_msdyn_iotalert = n.getCollectionOfObjectValues<Msdyn_iotalert>(createMsdyn_iotalertFromDiscriminatorValue); },
            "msdyn_iotalert_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_iotalert_ProcessSession": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_iotalert_QueueItems": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_iotalert_SyncErrors": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalert_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_iotalertid": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_iotalertid = n.getStringValue(); },
            "msdyn_LastCommandSent": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_LastCommandSent = n.getObjectValue<Msdyn_iotdevicecommand>(createMsdyn_iotdevicecommandFromDiscriminatorValue); },
            "msdyn_lastcommandsenttime": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_lastcommandsenttime = n.getDateValue(); },
            "msdyn_msdyn_iotalert_incident_IoTAlert": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_msdyn_iotalert_incident_IoTAlert = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert = n.getCollectionOfObjectValues<Msdyn_iotdevicecommand>(createMsdyn_iotdevicecommandFromDiscriminatorValue); },
            "msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_ParentAlert": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_ParentAlert = n.getObjectValue<Msdyn_iotalert>(createMsdyn_iotalertFromDiscriminatorValue); },
            "msdyn_parentalerttoken": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_parentalerttoken = n.getStringValue(); },
            "msdyn_suggestedincidenttype": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_suggestedincidenttype = n.getObjectValue<Msdyn_incidenttype>(createMsdyn_incidenttypeFromDiscriminatorValue); },
            "msdyn_suggestedpriority": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_suggestedpriority = n.getNumberValue(); },
            "msdyn_Workorder": (o, n) => { (o as unknown as Msdyn_iotalert).msdyn_Workorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_iotalert).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_iotalert).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_iotalert).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_iotalert).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_iotalert).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_iotalert).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_iotalert).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_iotalert).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_iotalert).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_iotalert).timezoneruleversionnumber = n.getNumberValue(); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_iotalert).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_iotalert).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_iotalert).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_alertdata property value. 
     * @returns a string
     */
    public get msdyn_alertdata() {
        return this._msdyn_alertdata;
    };
    /**
     * Sets the msdyn_alertdata property value. 
     * @param value Value to set for the msdyn_alertdata property.
     */
    public set msdyn_alertdata(value: string | undefined) {
        this._msdyn_alertdata = value;
    };
    /**
     * Gets the msdyn_alertpriorityscore property value. 
     * @returns a integer
     */
    public get msdyn_alertpriorityscore() {
        return this._msdyn_alertpriorityscore;
    };
    /**
     * Sets the msdyn_alertpriorityscore property value. 
     * @param value Value to set for the msdyn_alertpriorityscore property.
     */
    public set msdyn_alertpriorityscore(value: number | undefined) {
        this._msdyn_alertpriorityscore = value;
    };
    /**
     * Gets the msdyn_alerttime property value. 
     * @returns a Date
     */
    public get msdyn_alerttime() {
        return this._msdyn_alerttime;
    };
    /**
     * Sets the msdyn_alerttime property value. 
     * @param value Value to set for the msdyn_alerttime property.
     */
    public set msdyn_alerttime(value: Date | undefined) {
        this._msdyn_alerttime = value;
    };
    /**
     * Gets the msdyn_alerttoken property value. 
     * @returns a string
     */
    public get msdyn_alerttoken() {
        return this._msdyn_alerttoken;
    };
    /**
     * Sets the msdyn_alerttoken property value. 
     * @param value Value to set for the msdyn_alerttoken property.
     */
    public set msdyn_alerttoken(value: string | undefined) {
        this._msdyn_alerttoken = value;
    };
    /**
     * Gets the msdyn_alerttype property value. 
     * @returns a integer
     */
    public get msdyn_alerttype() {
        return this._msdyn_alerttype;
    };
    /**
     * Sets the msdyn_alerttype property value. 
     * @param value Value to set for the msdyn_alerttype property.
     */
    public set msdyn_alerttype(value: number | undefined) {
        this._msdyn_alerttype = value;
    };
    /**
     * Gets the msdyn_alerturl property value. 
     * @returns a string
     */
    public get msdyn_alerturl() {
        return this._msdyn_alerturl;
    };
    /**
     * Sets the msdyn_alerturl property value. 
     * @param value Value to set for the msdyn_alerturl property.
     */
    public set msdyn_alerturl(value: string | undefined) {
        this._msdyn_alerturl = value;
    };
    /**
     * Gets the msdyn_Case property value. 
     * @returns a incident
     */
    public get msdyn_Case() {
        return this._msdyn_Case;
    };
    /**
     * Sets the msdyn_Case property value. 
     * @param value Value to set for the msdyn_Case property.
     */
    public set msdyn_Case(value: Incident | undefined) {
        this._msdyn_Case = value;
    };
    /**
     * Gets the msdyn_CustomerAsset property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_CustomerAsset() {
        return this._msdyn_CustomerAsset;
    };
    /**
     * Sets the msdyn_CustomerAsset property value. 
     * @param value Value to set for the msdyn_CustomerAsset property.
     */
    public set msdyn_CustomerAsset(value: Msdyn_customerasset | undefined) {
        this._msdyn_CustomerAsset = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_Device property value. 
     * @returns a msdyn_iotdevice
     */
    public get msdyn_Device() {
        return this._msdyn_Device;
    };
    /**
     * Sets the msdyn_Device property value. 
     * @param value Value to set for the msdyn_Device property.
     */
    public set msdyn_Device(value: Msdyn_iotdevice | undefined) {
        this._msdyn_Device = value;
    };
    /**
     * Gets the msdyn_deviceid property value. 
     * @returns a string
     */
    public get msdyn_deviceid() {
        return this._msdyn_deviceid;
    };
    /**
     * Sets the msdyn_deviceid property value. 
     * @param value Value to set for the msdyn_deviceid property.
     */
    public set msdyn_deviceid(value: string | undefined) {
        this._msdyn_deviceid = value;
    };
    /**
     * Gets the msdyn_iotalert_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_iotalert_Annotations() {
        return this._msdyn_iotalert_Annotations;
    };
    /**
     * Sets the msdyn_iotalert_Annotations property value. 
     * @param value Value to set for the msdyn_iotalert_Annotations property.
     */
    public set msdyn_iotalert_Annotations(value: Annotation[] | undefined) {
        this._msdyn_iotalert_Annotations = value;
    };
    /**
     * Gets the msdyn_iotalert_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_iotalert_AsyncOperations() {
        return this._msdyn_iotalert_AsyncOperations;
    };
    /**
     * Sets the msdyn_iotalert_AsyncOperations property value. 
     * @param value Value to set for the msdyn_iotalert_AsyncOperations property.
     */
    public set msdyn_iotalert_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_iotalert_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_iotalert_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_iotalert_BulkDeleteFailures() {
        return this._msdyn_iotalert_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_iotalert_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_iotalert_BulkDeleteFailures property.
     */
    public set msdyn_iotalert_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_iotalert_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_iotalert_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_iotalert_connections1() {
        return this._msdyn_iotalert_connections1;
    };
    /**
     * Sets the msdyn_iotalert_connections1 property value. 
     * @param value Value to set for the msdyn_iotalert_connections1 property.
     */
    public set msdyn_iotalert_connections1(value: Connection[] | undefined) {
        this._msdyn_iotalert_connections1 = value;
    };
    /**
     * Gets the msdyn_iotalert_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_iotalert_connections2() {
        return this._msdyn_iotalert_connections2;
    };
    /**
     * Sets the msdyn_iotalert_connections2 property value. 
     * @param value Value to set for the msdyn_iotalert_connections2 property.
     */
    public set msdyn_iotalert_connections2(value: Connection[] | undefined) {
        this._msdyn_iotalert_connections2 = value;
    };
    /**
     * Gets the msdyn_iotalert_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_iotalert_MailboxTrackingFolders() {
        return this._msdyn_iotalert_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_iotalert_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_iotalert_MailboxTrackingFolders property.
     */
    public set msdyn_iotalert_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_iotalert_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_iotalert_msdyn_iotalert property value. 
     * @returns a msdyn_iotalert
     */
    public get msdyn_iotalert_msdyn_iotalert() {
        return this._msdyn_iotalert_msdyn_iotalert;
    };
    /**
     * Sets the msdyn_iotalert_msdyn_iotalert property value. 
     * @param value Value to set for the msdyn_iotalert_msdyn_iotalert property.
     */
    public set msdyn_iotalert_msdyn_iotalert(value: Msdyn_iotalert[] | undefined) {
        this._msdyn_iotalert_msdyn_iotalert = value;
    };
    /**
     * Gets the msdyn_iotalert_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_iotalert_PrincipalObjectAttributeAccesses() {
        return this._msdyn_iotalert_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_iotalert_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_iotalert_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_iotalert_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_iotalert_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_iotalert_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_iotalert_ProcessSession() {
        return this._msdyn_iotalert_ProcessSession;
    };
    /**
     * Sets the msdyn_iotalert_ProcessSession property value. 
     * @param value Value to set for the msdyn_iotalert_ProcessSession property.
     */
    public set msdyn_iotalert_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_iotalert_ProcessSession = value;
    };
    /**
     * Gets the msdyn_iotalert_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_iotalert_QueueItems() {
        return this._msdyn_iotalert_QueueItems;
    };
    /**
     * Sets the msdyn_iotalert_QueueItems property value. 
     * @param value Value to set for the msdyn_iotalert_QueueItems property.
     */
    public set msdyn_iotalert_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_iotalert_QueueItems = value;
    };
    /**
     * Gets the msdyn_iotalert_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_iotalert_SyncErrors() {
        return this._msdyn_iotalert_SyncErrors;
    };
    /**
     * Sets the msdyn_iotalert_SyncErrors property value. 
     * @param value Value to set for the msdyn_iotalert_SyncErrors property.
     */
    public set msdyn_iotalert_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_iotalert_SyncErrors = value;
    };
    /**
     * Gets the msdyn_iotalertid property value. 
     * @returns a string
     */
    public get msdyn_iotalertid() {
        return this._msdyn_iotalertid;
    };
    /**
     * Sets the msdyn_iotalertid property value. 
     * @param value Value to set for the msdyn_iotalertid property.
     */
    public set msdyn_iotalertid(value: string | undefined) {
        this._msdyn_iotalertid = value;
    };
    /**
     * Gets the msdyn_LastCommandSent property value. 
     * @returns a msdyn_iotdevicecommand
     */
    public get msdyn_LastCommandSent() {
        return this._msdyn_LastCommandSent;
    };
    /**
     * Sets the msdyn_LastCommandSent property value. 
     * @param value Value to set for the msdyn_LastCommandSent property.
     */
    public set msdyn_LastCommandSent(value: Msdyn_iotdevicecommand | undefined) {
        this._msdyn_LastCommandSent = value;
    };
    /**
     * Gets the msdyn_lastcommandsenttime property value. 
     * @returns a Date
     */
    public get msdyn_lastcommandsenttime() {
        return this._msdyn_lastcommandsenttime;
    };
    /**
     * Sets the msdyn_lastcommandsenttime property value. 
     * @param value Value to set for the msdyn_lastcommandsenttime property.
     */
    public set msdyn_lastcommandsenttime(value: Date | undefined) {
        this._msdyn_lastcommandsenttime = value;
    };
    /**
     * Gets the msdyn_msdyn_iotalert_incident_IoTAlert property value. 
     * @returns a incident
     */
    public get msdyn_msdyn_iotalert_incident_IoTAlert() {
        return this._msdyn_msdyn_iotalert_incident_IoTAlert;
    };
    /**
     * Sets the msdyn_msdyn_iotalert_incident_IoTAlert property value. 
     * @param value Value to set for the msdyn_msdyn_iotalert_incident_IoTAlert property.
     */
    public set msdyn_msdyn_iotalert_incident_IoTAlert(value: Incident[] | undefined) {
        this._msdyn_msdyn_iotalert_incident_IoTAlert = value;
    };
    /**
     * Gets the msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert property value. 
     * @returns a msdyn_iotdevicecommand
     */
    public get msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert() {
        return this._msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert;
    };
    /**
     * Sets the msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert property value. 
     * @param value Value to set for the msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert property.
     */
    public set msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert(value: Msdyn_iotdevicecommand[] | undefined) {
        this._msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert = value;
    };
    /**
     * Gets the msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert() {
        return this._msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert;
    };
    /**
     * Sets the msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert property value. 
     * @param value Value to set for the msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert property.
     */
    public set msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert(value: Msdyn_workorder[] | undefined) {
        this._msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert = value;
    };
    /**
     * Gets the msdyn_ParentAlert property value. 
     * @returns a msdyn_iotalert
     */
    public get msdyn_ParentAlert() {
        return this._msdyn_ParentAlert;
    };
    /**
     * Sets the msdyn_ParentAlert property value. 
     * @param value Value to set for the msdyn_ParentAlert property.
     */
    public set msdyn_ParentAlert(value: Msdyn_iotalert | undefined) {
        this._msdyn_ParentAlert = value;
    };
    /**
     * Gets the msdyn_parentalerttoken property value. 
     * @returns a string
     */
    public get msdyn_parentalerttoken() {
        return this._msdyn_parentalerttoken;
    };
    /**
     * Sets the msdyn_parentalerttoken property value. 
     * @param value Value to set for the msdyn_parentalerttoken property.
     */
    public set msdyn_parentalerttoken(value: string | undefined) {
        this._msdyn_parentalerttoken = value;
    };
    /**
     * Gets the msdyn_suggestedincidenttype property value. 
     * @returns a msdyn_incidenttype
     */
    public get msdyn_suggestedincidenttype() {
        return this._msdyn_suggestedincidenttype;
    };
    /**
     * Sets the msdyn_suggestedincidenttype property value. 
     * @param value Value to set for the msdyn_suggestedincidenttype property.
     */
    public set msdyn_suggestedincidenttype(value: Msdyn_incidenttype | undefined) {
        this._msdyn_suggestedincidenttype = value;
    };
    /**
     * Gets the msdyn_suggestedpriority property value. 
     * @returns a integer
     */
    public get msdyn_suggestedpriority() {
        return this._msdyn_suggestedpriority;
    };
    /**
     * Sets the msdyn_suggestedpriority property value. 
     * @param value Value to set for the msdyn_suggestedpriority property.
     */
    public set msdyn_suggestedpriority(value: number | undefined) {
        this._msdyn_suggestedpriority = value;
    };
    /**
     * Gets the msdyn_Workorder property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_Workorder() {
        return this._msdyn_Workorder;
    };
    /**
     * Sets the msdyn_Workorder property value. 
     * @param value Value to set for the msdyn_Workorder property.
     */
    public set msdyn_Workorder(value: Msdyn_workorder | undefined) {
        this._msdyn_Workorder = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_case_value", this._msdyn_case_value);
        writer.writeStringValue("_msdyn_customerasset_value", this._msdyn_customerasset_value);
        writer.writeStringValue("_msdyn_device_value", this._msdyn_device_value);
        writer.writeStringValue("_msdyn_lastcommandsent_value", this._msdyn_lastcommandsent_value);
        writer.writeStringValue("_msdyn_parentalert_value", this._msdyn_parentalert_value);
        writer.writeStringValue("_msdyn_suggestedincidenttype_value", this._msdyn_suggestedincidenttype_value);
        writer.writeStringValue("_msdyn_workorder_value", this._msdyn_workorder_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_stageid_value", this._stageid_value);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b>("bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b", this.bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b);
        writer.writeCollectionOfObjectValues<Msdyn_iottocaseprocess>("bpf_msdyn_iotalert_msdyn_iottocaseprocess", this.bpf_msdyn_iotalert_msdyn_iottocaseprocess);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_alertdata", this.msdyn_alertdata);
        writer.writeNumberValue("msdyn_alertpriorityscore", this.msdyn_alertpriorityscore);
        writer.writeDateValue("msdyn_alerttime", this.msdyn_alerttime);
        writer.writeStringValue("msdyn_alerttoken", this.msdyn_alerttoken);
        writer.writeNumberValue("msdyn_alerttype", this.msdyn_alerttype);
        writer.writeStringValue("msdyn_alerturl", this.msdyn_alerturl);
        writer.writeObjectValue<Incident>("msdyn_Case", this.msdyn_Case);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_CustomerAsset", this.msdyn_CustomerAsset);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeObjectValue<Msdyn_iotdevice>("msdyn_Device", this.msdyn_Device);
        writer.writeStringValue("msdyn_deviceid", this.msdyn_deviceid);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_iotalert_Annotations", this.msdyn_iotalert_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_iotalert_AsyncOperations", this.msdyn_iotalert_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_iotalert_BulkDeleteFailures", this.msdyn_iotalert_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_iotalert_connections1", this.msdyn_iotalert_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_iotalert_connections2", this.msdyn_iotalert_connections2);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_iotalert_MailboxTrackingFolders", this.msdyn_iotalert_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_iotalert>("msdyn_iotalert_msdyn_iotalert", this.msdyn_iotalert_msdyn_iotalert);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_iotalert_PrincipalObjectAttributeAccesses", this.msdyn_iotalert_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_iotalert_ProcessSession", this.msdyn_iotalert_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_iotalert_QueueItems", this.msdyn_iotalert_QueueItems);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_iotalert_SyncErrors", this.msdyn_iotalert_SyncErrors);
        writer.writeStringValue("msdyn_iotalertid", this.msdyn_iotalertid);
        writer.writeObjectValue<Msdyn_iotdevicecommand>("msdyn_LastCommandSent", this.msdyn_LastCommandSent);
        writer.writeDateValue("msdyn_lastcommandsenttime", this.msdyn_lastcommandsenttime);
        writer.writeCollectionOfObjectValues<Incident>("msdyn_msdyn_iotalert_incident_IoTAlert", this.msdyn_msdyn_iotalert_incident_IoTAlert);
        writer.writeCollectionOfObjectValues<Msdyn_iotdevicecommand>("msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert", this.msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert", this.msdyn_msdyn_iotalert_msdyn_workorder_IoTAlert);
        writer.writeObjectValue<Msdyn_iotalert>("msdyn_ParentAlert", this.msdyn_ParentAlert);
        writer.writeStringValue("msdyn_parentalerttoken", this.msdyn_parentalerttoken);
        writer.writeObjectValue<Msdyn_incidenttype>("msdyn_suggestedincidenttype", this.msdyn_suggestedincidenttype);
        writer.writeNumberValue("msdyn_suggestedpriority", this.msdyn_suggestedpriority);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_Workorder", this.msdyn_Workorder);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Processstage>("stageid", this.stageid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a processstage
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: Processstage | undefined) {
        this._stageid = value;
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

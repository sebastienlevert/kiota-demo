import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_unifiedroutingdiagnosticFromDiscriminatorValue} from './createMsdyn_unifiedroutingdiagnosticFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueFromDiscriminatorValue} from './createQueueFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_liveworkstream, Msdyn_ocliveworkitem, Msdyn_unifiedroutingdiagnostic, Principal, Principalobjectattributeaccess, Processsession, Queue, Queueitem, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_unifiedroutingrun extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_assignedagent_value?: string | undefined;
    private __msdyn_liveworkitem_value?: string | undefined;
    private __msdyn_queue_value?: string | undefined;
    private __msdyn_targetobject_value?: string | undefined;
    private __msdyn_workstream_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_assignedagent?: Systemuser | undefined;
    private _msdyn_endtime?: Date | undefined;
    private _msdyn_liveworkitem?: Msdyn_ocliveworkitem | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_queue?: Queue | undefined;
    private _msdyn_routingduration?: number | undefined;
    private _msdyn_routingdurationinseconds?: number | undefined;
    private _msdyn_routingstatus?: number | undefined;
    private _msdyn_runnumber?: number | undefined;
    private _msdyn_starttime?: Date | undefined;
    private _msdyn_targetobject_msdyn_ocliveworkitem?: Msdyn_ocliveworkitem | undefined;
    private _msdyn_targetobject_queueitem?: Queueitem | undefined;
    private _msdyn_unifiedroutingrun_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_unifiedroutingrun_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_unifiedroutingrun_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_unifiedroutingrun_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_unifiedroutingrun_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic?: Msdyn_unifiedroutingdiagnostic[] | undefined;
    private _msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_unifiedroutingrun_ProcessSession?: Processsession[] | undefined;
    private _msdyn_unifiedroutingrun_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_unifiedroutingrunid?: string | undefined;
    private _msdyn_workstream?: Msdyn_liveworkstream | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the _msdyn_assignedagent_value property value. 
     * @returns a string
     */
    public get _msdyn_assignedagent_value() {
        return this.__msdyn_assignedagent_value;
    };
    /**
     * Sets the _msdyn_assignedagent_value property value. 
     * @param value Value to set for the _msdyn_assignedagent_value property.
     */
    public set _msdyn_assignedagent_value(value: string | undefined) {
        this.__msdyn_assignedagent_value = value;
    };
    /**
     * Gets the _msdyn_liveworkitem_value property value. 
     * @returns a string
     */
    public get _msdyn_liveworkitem_value() {
        return this.__msdyn_liveworkitem_value;
    };
    /**
     * Sets the _msdyn_liveworkitem_value property value. 
     * @param value Value to set for the _msdyn_liveworkitem_value property.
     */
    public set _msdyn_liveworkitem_value(value: string | undefined) {
        this.__msdyn_liveworkitem_value = value;
    };
    /**
     * Gets the _msdyn_queue_value property value. 
     * @returns a string
     */
    public get _msdyn_queue_value() {
        return this.__msdyn_queue_value;
    };
    /**
     * Sets the _msdyn_queue_value property value. 
     * @param value Value to set for the _msdyn_queue_value property.
     */
    public set _msdyn_queue_value(value: string | undefined) {
        this.__msdyn_queue_value = value;
    };
    /**
     * Gets the _msdyn_targetobject_value property value. 
     * @returns a string
     */
    public get _msdyn_targetobject_value() {
        return this.__msdyn_targetobject_value;
    };
    /**
     * Sets the _msdyn_targetobject_value property value. 
     * @param value Value to set for the _msdyn_targetobject_value property.
     */
    public set _msdyn_targetobject_value(value: string | undefined) {
        this.__msdyn_targetobject_value = value;
    };
    /**
     * Gets the _msdyn_workstream_value property value. 
     * @returns a string
     */
    public get _msdyn_workstream_value() {
        return this.__msdyn_workstream_value;
    };
    /**
     * Sets the _msdyn_workstream_value property value. 
     * @param value Value to set for the _msdyn_workstream_value property.
     */
    public set _msdyn_workstream_value(value: string | undefined) {
        this.__msdyn_workstream_value = value;
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
     * Instantiates a new msdyn_unifiedroutingrun and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_assignedagent_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._msdyn_assignedagent_value = n.getStringValue(); },
            "_msdyn_liveworkitem_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._msdyn_liveworkitem_value = n.getStringValue(); },
            "_msdyn_queue_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._msdyn_queue_value = n.getStringValue(); },
            "_msdyn_targetobject_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._msdyn_targetobject_value = n.getStringValue(); },
            "_msdyn_workstream_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._msdyn_workstream_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_assignedagent": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_assignedagent = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_endtime": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_endtime = n.getDateValue(); },
            "msdyn_liveworkitem": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_liveworkitem = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_name = n.getStringValue(); },
            "msdyn_queue": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_queue = n.getObjectValue<Queue>(createQueueFromDiscriminatorValue); },
            "msdyn_routingduration": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_routingduration = n.getNumberValue(); },
            "msdyn_routingdurationinseconds": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_routingdurationinseconds = n.getNumberValue(); },
            "msdyn_routingstatus": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_routingstatus = n.getNumberValue(); },
            "msdyn_runnumber": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_runnumber = n.getNumberValue(); },
            "msdyn_starttime": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_starttime = n.getDateValue(); },
            "msdyn_targetobject_msdyn_ocliveworkitem": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_targetobject_msdyn_ocliveworkitem = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_targetobject_queueitem": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_targetobject_queueitem = n.getObjectValue<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_unifiedroutingrun_AsyncOperations": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_unifiedroutingrun_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_unifiedroutingrun_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_unifiedroutingrun_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_unifiedroutingrun_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_unifiedroutingrun_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_unifiedroutingrun_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_unifiedroutingrun_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_unifiedroutingrun_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_unifiedroutingrun_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic = n.getCollectionOfObjectValues<Msdyn_unifiedroutingdiagnostic>(createMsdyn_unifiedroutingdiagnosticFromDiscriminatorValue); },
            "msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_unifiedroutingrun_ProcessSession": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_unifiedroutingrun_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_unifiedroutingrun_SyncErrors": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_unifiedroutingrun_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_unifiedroutingrunid": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_unifiedroutingrunid = n.getStringValue(); },
            "msdyn_workstream": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).msdyn_workstream = n.getObjectValue<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_unifiedroutingrun).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_assignedagent property value. 
     * @returns a systemuser
     */
    public get msdyn_assignedagent() {
        return this._msdyn_assignedagent;
    };
    /**
     * Sets the msdyn_assignedagent property value. 
     * @param value Value to set for the msdyn_assignedagent property.
     */
    public set msdyn_assignedagent(value: Systemuser | undefined) {
        this._msdyn_assignedagent = value;
    };
    /**
     * Gets the msdyn_endtime property value. 
     * @returns a Date
     */
    public get msdyn_endtime() {
        return this._msdyn_endtime;
    };
    /**
     * Sets the msdyn_endtime property value. 
     * @param value Value to set for the msdyn_endtime property.
     */
    public set msdyn_endtime(value: Date | undefined) {
        this._msdyn_endtime = value;
    };
    /**
     * Gets the msdyn_liveworkitem property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_liveworkitem() {
        return this._msdyn_liveworkitem;
    };
    /**
     * Sets the msdyn_liveworkitem property value. 
     * @param value Value to set for the msdyn_liveworkitem property.
     */
    public set msdyn_liveworkitem(value: Msdyn_ocliveworkitem | undefined) {
        this._msdyn_liveworkitem = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_queue property value. 
     * @returns a queue
     */
    public get msdyn_queue() {
        return this._msdyn_queue;
    };
    /**
     * Sets the msdyn_queue property value. 
     * @param value Value to set for the msdyn_queue property.
     */
    public set msdyn_queue(value: Queue | undefined) {
        this._msdyn_queue = value;
    };
    /**
     * Gets the msdyn_routingduration property value. 
     * @returns a integer
     */
    public get msdyn_routingduration() {
        return this._msdyn_routingduration;
    };
    /**
     * Sets the msdyn_routingduration property value. 
     * @param value Value to set for the msdyn_routingduration property.
     */
    public set msdyn_routingduration(value: number | undefined) {
        this._msdyn_routingduration = value;
    };
    /**
     * Gets the msdyn_routingdurationinseconds property value. 
     * @returns a integer
     */
    public get msdyn_routingdurationinseconds() {
        return this._msdyn_routingdurationinseconds;
    };
    /**
     * Sets the msdyn_routingdurationinseconds property value. 
     * @param value Value to set for the msdyn_routingdurationinseconds property.
     */
    public set msdyn_routingdurationinseconds(value: number | undefined) {
        this._msdyn_routingdurationinseconds = value;
    };
    /**
     * Gets the msdyn_routingstatus property value. 
     * @returns a integer
     */
    public get msdyn_routingstatus() {
        return this._msdyn_routingstatus;
    };
    /**
     * Sets the msdyn_routingstatus property value. 
     * @param value Value to set for the msdyn_routingstatus property.
     */
    public set msdyn_routingstatus(value: number | undefined) {
        this._msdyn_routingstatus = value;
    };
    /**
     * Gets the msdyn_runnumber property value. 
     * @returns a integer
     */
    public get msdyn_runnumber() {
        return this._msdyn_runnumber;
    };
    /**
     * Sets the msdyn_runnumber property value. 
     * @param value Value to set for the msdyn_runnumber property.
     */
    public set msdyn_runnumber(value: number | undefined) {
        this._msdyn_runnumber = value;
    };
    /**
     * Gets the msdyn_starttime property value. 
     * @returns a Date
     */
    public get msdyn_starttime() {
        return this._msdyn_starttime;
    };
    /**
     * Sets the msdyn_starttime property value. 
     * @param value Value to set for the msdyn_starttime property.
     */
    public set msdyn_starttime(value: Date | undefined) {
        this._msdyn_starttime = value;
    };
    /**
     * Gets the msdyn_targetobject_msdyn_ocliveworkitem property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_targetobject_msdyn_ocliveworkitem() {
        return this._msdyn_targetobject_msdyn_ocliveworkitem;
    };
    /**
     * Sets the msdyn_targetobject_msdyn_ocliveworkitem property value. 
     * @param value Value to set for the msdyn_targetobject_msdyn_ocliveworkitem property.
     */
    public set msdyn_targetobject_msdyn_ocliveworkitem(value: Msdyn_ocliveworkitem | undefined) {
        this._msdyn_targetobject_msdyn_ocliveworkitem = value;
    };
    /**
     * Gets the msdyn_targetobject_queueitem property value. 
     * @returns a queueitem
     */
    public get msdyn_targetobject_queueitem() {
        return this._msdyn_targetobject_queueitem;
    };
    /**
     * Sets the msdyn_targetobject_queueitem property value. 
     * @param value Value to set for the msdyn_targetobject_queueitem property.
     */
    public set msdyn_targetobject_queueitem(value: Queueitem | undefined) {
        this._msdyn_targetobject_queueitem = value;
    };
    /**
     * Gets the msdyn_unifiedroutingrun_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_unifiedroutingrun_AsyncOperations() {
        return this._msdyn_unifiedroutingrun_AsyncOperations;
    };
    /**
     * Sets the msdyn_unifiedroutingrun_AsyncOperations property value. 
     * @param value Value to set for the msdyn_unifiedroutingrun_AsyncOperations property.
     */
    public set msdyn_unifiedroutingrun_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_unifiedroutingrun_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_unifiedroutingrun_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_unifiedroutingrun_BulkDeleteFailures() {
        return this._msdyn_unifiedroutingrun_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_unifiedroutingrun_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_unifiedroutingrun_BulkDeleteFailures property.
     */
    public set msdyn_unifiedroutingrun_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_unifiedroutingrun_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_unifiedroutingrun_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_unifiedroutingrun_DuplicateBaseRecord() {
        return this._msdyn_unifiedroutingrun_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_unifiedroutingrun_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_unifiedroutingrun_DuplicateBaseRecord property.
     */
    public set msdyn_unifiedroutingrun_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_unifiedroutingrun_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_unifiedroutingrun_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_unifiedroutingrun_DuplicateMatchingRecord() {
        return this._msdyn_unifiedroutingrun_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_unifiedroutingrun_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_unifiedroutingrun_DuplicateMatchingRecord property.
     */
    public set msdyn_unifiedroutingrun_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_unifiedroutingrun_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_unifiedroutingrun_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_unifiedroutingrun_MailboxTrackingFolders() {
        return this._msdyn_unifiedroutingrun_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_unifiedroutingrun_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_unifiedroutingrun_MailboxTrackingFolders property.
     */
    public set msdyn_unifiedroutingrun_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_unifiedroutingrun_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic property value. 
     * @returns a msdyn_unifiedroutingdiagnostic
     */
    public get msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic() {
        return this._msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic;
    };
    /**
     * Sets the msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic property value. 
     * @param value Value to set for the msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic property.
     */
    public set msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic(value: Msdyn_unifiedroutingdiagnostic[] | undefined) {
        this._msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic = value;
    };
    /**
     * Gets the msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses() {
        return this._msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_unifiedroutingrun_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_unifiedroutingrun_ProcessSession() {
        return this._msdyn_unifiedroutingrun_ProcessSession;
    };
    /**
     * Sets the msdyn_unifiedroutingrun_ProcessSession property value. 
     * @param value Value to set for the msdyn_unifiedroutingrun_ProcessSession property.
     */
    public set msdyn_unifiedroutingrun_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_unifiedroutingrun_ProcessSession = value;
    };
    /**
     * Gets the msdyn_unifiedroutingrun_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_unifiedroutingrun_SyncErrors() {
        return this._msdyn_unifiedroutingrun_SyncErrors;
    };
    /**
     * Sets the msdyn_unifiedroutingrun_SyncErrors property value. 
     * @param value Value to set for the msdyn_unifiedroutingrun_SyncErrors property.
     */
    public set msdyn_unifiedroutingrun_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_unifiedroutingrun_SyncErrors = value;
    };
    /**
     * Gets the msdyn_unifiedroutingrunid property value. 
     * @returns a string
     */
    public get msdyn_unifiedroutingrunid() {
        return this._msdyn_unifiedroutingrunid;
    };
    /**
     * Sets the msdyn_unifiedroutingrunid property value. 
     * @param value Value to set for the msdyn_unifiedroutingrunid property.
     */
    public set msdyn_unifiedroutingrunid(value: string | undefined) {
        this._msdyn_unifiedroutingrunid = value;
    };
    /**
     * Gets the msdyn_workstream property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_workstream() {
        return this._msdyn_workstream;
    };
    /**
     * Sets the msdyn_workstream property value. 
     * @param value Value to set for the msdyn_workstream property.
     */
    public set msdyn_workstream(value: Msdyn_liveworkstream | undefined) {
        this._msdyn_workstream = value;
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
        writer.writeStringValue("_msdyn_assignedagent_value", this._msdyn_assignedagent_value);
        writer.writeStringValue("_msdyn_liveworkitem_value", this._msdyn_liveworkitem_value);
        writer.writeStringValue("_msdyn_queue_value", this._msdyn_queue_value);
        writer.writeStringValue("_msdyn_targetobject_value", this._msdyn_targetobject_value);
        writer.writeStringValue("_msdyn_workstream_value", this._msdyn_workstream_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Systemuser>("msdyn_assignedagent", this.msdyn_assignedagent);
        writer.writeDateValue("msdyn_endtime", this.msdyn_endtime);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("msdyn_liveworkitem", this.msdyn_liveworkitem);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Queue>("msdyn_queue", this.msdyn_queue);
        writer.writeNumberValue("msdyn_routingduration", this.msdyn_routingduration);
        writer.writeNumberValue("msdyn_routingdurationinseconds", this.msdyn_routingdurationinseconds);
        writer.writeNumberValue("msdyn_routingstatus", this.msdyn_routingstatus);
        writer.writeNumberValue("msdyn_runnumber", this.msdyn_runnumber);
        writer.writeDateValue("msdyn_starttime", this.msdyn_starttime);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("msdyn_targetobject_msdyn_ocliveworkitem", this.msdyn_targetobject_msdyn_ocliveworkitem);
        writer.writeObjectValue<Queueitem>("msdyn_targetobject_queueitem", this.msdyn_targetobject_queueitem);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_unifiedroutingrun_AsyncOperations", this.msdyn_unifiedroutingrun_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_unifiedroutingrun_BulkDeleteFailures", this.msdyn_unifiedroutingrun_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_unifiedroutingrun_DuplicateBaseRecord", this.msdyn_unifiedroutingrun_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_unifiedroutingrun_DuplicateMatchingRecord", this.msdyn_unifiedroutingrun_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_unifiedroutingrun_MailboxTrackingFolders", this.msdyn_unifiedroutingrun_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_unifiedroutingdiagnostic>("msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic", this.msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses", this.msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_unifiedroutingrun_ProcessSession", this.msdyn_unifiedroutingrun_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_unifiedroutingrun_SyncErrors", this.msdyn_unifiedroutingrun_SyncErrors);
        writer.writeStringValue("msdyn_unifiedroutingrunid", this.msdyn_unifiedroutingrunid);
        writer.writeObjectValue<Msdyn_liveworkstream>("msdyn_workstream", this.msdyn_workstream);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
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

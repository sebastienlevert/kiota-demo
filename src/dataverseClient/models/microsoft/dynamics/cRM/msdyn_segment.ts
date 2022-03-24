import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_assignmentruleFromDiscriminatorValue} from './createMsdyn_assignmentruleFromDiscriminatorValue';
import {createMsdyn_salesroutingrunFromDiscriminatorValue} from './createMsdyn_salesroutingrunFromDiscriminatorValue';
import {createMsdyn_sequenceFromDiscriminatorValue} from './createMsdyn_sequenceFromDiscriminatorValue';
import {createMsdyn_sequencetargetFromDiscriminatorValue} from './createMsdyn_sequencetargetFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Lead, Mailboxtrackingfolder, Msdyn_assignmentrule, Msdyn_salesroutingrun, Msdyn_sequence, Msdyn_sequencetarget, Opportunity, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_segment extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_sequence_value?: string | undefined;
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
    private _msdyn_description?: string | undefined;
    private _msdyn_entityfieldname?: string | undefined;
    private _msdyn_entityfilter?: string | undefined;
    private _msdyn_msdyn_segment_lead?: Lead[] | undefined;
    private _msdyn_msdyn_segment_msdyn_assignmentrule_segment?: Msdyn_assignmentrule[] | undefined;
    private _msdyn_msdyn_segment_msdyn_salesroutingrun_segment?: Msdyn_salesroutingrun[] | undefined;
    private _msdyn_msdyn_segment_opportunity?: Opportunity[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_objecttype?: string | undefined;
    private _msdyn_objecttypecode?: number | undefined;
    private _msdyn_segment_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_segment_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_segment_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_segment_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_segment_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_segment_msdyn_sequencetarget?: Msdyn_sequencetarget[] | undefined;
    private _msdyn_segment_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_segment_ProcessSession?: Processsession[] | undefined;
    private _msdyn_segment_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_segmentid?: string | undefined;
    private _msdyn_Sequence?: Msdyn_sequence | undefined;
    private _msdyn_triggertype?: number | undefined;
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
     * Gets the _msdyn_sequence_value property value. 
     * @returns a string
     */
    public get _msdyn_sequence_value() {
        return this.__msdyn_sequence_value;
    };
    /**
     * Sets the _msdyn_sequence_value property value. 
     * @param value Value to set for the _msdyn_sequence_value property.
     */
    public set _msdyn_sequence_value(value: string | undefined) {
        this.__msdyn_sequence_value = value;
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
     * Instantiates a new msdyn_segment and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_segment)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_segment)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_segment)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_segment)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_sequence_value": (o, n) => { (o as unknown as Msdyn_segment)._msdyn_sequence_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_segment)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_segment)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_segment)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_segment)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_segment).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_segment).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_segment).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_segment).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_segment).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_segment).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_segment).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_segment).msdyn_description = n.getStringValue(); },
            "msdyn_entityfieldname": (o, n) => { (o as unknown as Msdyn_segment).msdyn_entityfieldname = n.getStringValue(); },
            "msdyn_entityfilter": (o, n) => { (o as unknown as Msdyn_segment).msdyn_entityfilter = n.getStringValue(); },
            "msdyn_msdyn_segment_lead": (o, n) => { (o as unknown as Msdyn_segment).msdyn_msdyn_segment_lead = n.getCollectionOfObjectValues<Lead>(createLeadFromDiscriminatorValue); },
            "msdyn_msdyn_segment_msdyn_assignmentrule_segment": (o, n) => { (o as unknown as Msdyn_segment).msdyn_msdyn_segment_msdyn_assignmentrule_segment = n.getCollectionOfObjectValues<Msdyn_assignmentrule>(createMsdyn_assignmentruleFromDiscriminatorValue); },
            "msdyn_msdyn_segment_msdyn_salesroutingrun_segment": (o, n) => { (o as unknown as Msdyn_segment).msdyn_msdyn_segment_msdyn_salesroutingrun_segment = n.getCollectionOfObjectValues<Msdyn_salesroutingrun>(createMsdyn_salesroutingrunFromDiscriminatorValue); },
            "msdyn_msdyn_segment_opportunity": (o, n) => { (o as unknown as Msdyn_segment).msdyn_msdyn_segment_opportunity = n.getCollectionOfObjectValues<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_segment).msdyn_name = n.getStringValue(); },
            "msdyn_objecttype": (o, n) => { (o as unknown as Msdyn_segment).msdyn_objecttype = n.getStringValue(); },
            "msdyn_objecttypecode": (o, n) => { (o as unknown as Msdyn_segment).msdyn_objecttypecode = n.getNumberValue(); },
            "msdyn_segment_AsyncOperations": (o, n) => { (o as unknown as Msdyn_segment).msdyn_segment_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_segment_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_segment).msdyn_segment_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_segment_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_segment).msdyn_segment_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_segment_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_segment).msdyn_segment_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_segment_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_segment).msdyn_segment_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_segment_msdyn_sequencetarget": (o, n) => { (o as unknown as Msdyn_segment).msdyn_segment_msdyn_sequencetarget = n.getCollectionOfObjectValues<Msdyn_sequencetarget>(createMsdyn_sequencetargetFromDiscriminatorValue); },
            "msdyn_segment_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_segment).msdyn_segment_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_segment_ProcessSession": (o, n) => { (o as unknown as Msdyn_segment).msdyn_segment_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_segment_SyncErrors": (o, n) => { (o as unknown as Msdyn_segment).msdyn_segment_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_segmentid": (o, n) => { (o as unknown as Msdyn_segment).msdyn_segmentid = n.getStringValue(); },
            "msdyn_Sequence": (o, n) => { (o as unknown as Msdyn_segment).msdyn_Sequence = n.getObjectValue<Msdyn_sequence>(createMsdyn_sequenceFromDiscriminatorValue); },
            "msdyn_triggertype": (o, n) => { (o as unknown as Msdyn_segment).msdyn_triggertype = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_segment).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_segment).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_segment).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_segment).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_segment).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_segment).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_segment).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_segment).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_segment).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_segment).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_entityfieldname property value. 
     * @returns a string
     */
    public get msdyn_entityfieldname() {
        return this._msdyn_entityfieldname;
    };
    /**
     * Sets the msdyn_entityfieldname property value. 
     * @param value Value to set for the msdyn_entityfieldname property.
     */
    public set msdyn_entityfieldname(value: string | undefined) {
        this._msdyn_entityfieldname = value;
    };
    /**
     * Gets the msdyn_entityfilter property value. 
     * @returns a string
     */
    public get msdyn_entityfilter() {
        return this._msdyn_entityfilter;
    };
    /**
     * Sets the msdyn_entityfilter property value. 
     * @param value Value to set for the msdyn_entityfilter property.
     */
    public set msdyn_entityfilter(value: string | undefined) {
        this._msdyn_entityfilter = value;
    };
    /**
     * Gets the msdyn_msdyn_segment_lead property value. 
     * @returns a lead
     */
    public get msdyn_msdyn_segment_lead() {
        return this._msdyn_msdyn_segment_lead;
    };
    /**
     * Sets the msdyn_msdyn_segment_lead property value. 
     * @param value Value to set for the msdyn_msdyn_segment_lead property.
     */
    public set msdyn_msdyn_segment_lead(value: Lead[] | undefined) {
        this._msdyn_msdyn_segment_lead = value;
    };
    /**
     * Gets the msdyn_msdyn_segment_msdyn_assignmentrule_segment property value. 
     * @returns a msdyn_assignmentrule
     */
    public get msdyn_msdyn_segment_msdyn_assignmentrule_segment() {
        return this._msdyn_msdyn_segment_msdyn_assignmentrule_segment;
    };
    /**
     * Sets the msdyn_msdyn_segment_msdyn_assignmentrule_segment property value. 
     * @param value Value to set for the msdyn_msdyn_segment_msdyn_assignmentrule_segment property.
     */
    public set msdyn_msdyn_segment_msdyn_assignmentrule_segment(value: Msdyn_assignmentrule[] | undefined) {
        this._msdyn_msdyn_segment_msdyn_assignmentrule_segment = value;
    };
    /**
     * Gets the msdyn_msdyn_segment_msdyn_salesroutingrun_segment property value. 
     * @returns a msdyn_salesroutingrun
     */
    public get msdyn_msdyn_segment_msdyn_salesroutingrun_segment() {
        return this._msdyn_msdyn_segment_msdyn_salesroutingrun_segment;
    };
    /**
     * Sets the msdyn_msdyn_segment_msdyn_salesroutingrun_segment property value. 
     * @param value Value to set for the msdyn_msdyn_segment_msdyn_salesroutingrun_segment property.
     */
    public set msdyn_msdyn_segment_msdyn_salesroutingrun_segment(value: Msdyn_salesroutingrun[] | undefined) {
        this._msdyn_msdyn_segment_msdyn_salesroutingrun_segment = value;
    };
    /**
     * Gets the msdyn_msdyn_segment_opportunity property value. 
     * @returns a opportunity
     */
    public get msdyn_msdyn_segment_opportunity() {
        return this._msdyn_msdyn_segment_opportunity;
    };
    /**
     * Sets the msdyn_msdyn_segment_opportunity property value. 
     * @param value Value to set for the msdyn_msdyn_segment_opportunity property.
     */
    public set msdyn_msdyn_segment_opportunity(value: Opportunity[] | undefined) {
        this._msdyn_msdyn_segment_opportunity = value;
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
     * Gets the msdyn_objecttype property value. 
     * @returns a string
     */
    public get msdyn_objecttype() {
        return this._msdyn_objecttype;
    };
    /**
     * Sets the msdyn_objecttype property value. 
     * @param value Value to set for the msdyn_objecttype property.
     */
    public set msdyn_objecttype(value: string | undefined) {
        this._msdyn_objecttype = value;
    };
    /**
     * Gets the msdyn_objecttypecode property value. 
     * @returns a integer
     */
    public get msdyn_objecttypecode() {
        return this._msdyn_objecttypecode;
    };
    /**
     * Sets the msdyn_objecttypecode property value. 
     * @param value Value to set for the msdyn_objecttypecode property.
     */
    public set msdyn_objecttypecode(value: number | undefined) {
        this._msdyn_objecttypecode = value;
    };
    /**
     * Gets the msdyn_segment_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_segment_AsyncOperations() {
        return this._msdyn_segment_AsyncOperations;
    };
    /**
     * Sets the msdyn_segment_AsyncOperations property value. 
     * @param value Value to set for the msdyn_segment_AsyncOperations property.
     */
    public set msdyn_segment_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_segment_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_segment_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_segment_BulkDeleteFailures() {
        return this._msdyn_segment_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_segment_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_segment_BulkDeleteFailures property.
     */
    public set msdyn_segment_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_segment_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_segment_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_segment_DuplicateBaseRecord() {
        return this._msdyn_segment_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_segment_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_segment_DuplicateBaseRecord property.
     */
    public set msdyn_segment_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_segment_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_segment_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_segment_DuplicateMatchingRecord() {
        return this._msdyn_segment_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_segment_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_segment_DuplicateMatchingRecord property.
     */
    public set msdyn_segment_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_segment_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_segment_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_segment_MailboxTrackingFolders() {
        return this._msdyn_segment_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_segment_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_segment_MailboxTrackingFolders property.
     */
    public set msdyn_segment_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_segment_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_segment_msdyn_sequencetarget property value. 
     * @returns a msdyn_sequencetarget
     */
    public get msdyn_segment_msdyn_sequencetarget() {
        return this._msdyn_segment_msdyn_sequencetarget;
    };
    /**
     * Sets the msdyn_segment_msdyn_sequencetarget property value. 
     * @param value Value to set for the msdyn_segment_msdyn_sequencetarget property.
     */
    public set msdyn_segment_msdyn_sequencetarget(value: Msdyn_sequencetarget[] | undefined) {
        this._msdyn_segment_msdyn_sequencetarget = value;
    };
    /**
     * Gets the msdyn_segment_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_segment_PrincipalObjectAttributeAccesses() {
        return this._msdyn_segment_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_segment_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_segment_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_segment_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_segment_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_segment_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_segment_ProcessSession() {
        return this._msdyn_segment_ProcessSession;
    };
    /**
     * Sets the msdyn_segment_ProcessSession property value. 
     * @param value Value to set for the msdyn_segment_ProcessSession property.
     */
    public set msdyn_segment_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_segment_ProcessSession = value;
    };
    /**
     * Gets the msdyn_segment_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_segment_SyncErrors() {
        return this._msdyn_segment_SyncErrors;
    };
    /**
     * Sets the msdyn_segment_SyncErrors property value. 
     * @param value Value to set for the msdyn_segment_SyncErrors property.
     */
    public set msdyn_segment_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_segment_SyncErrors = value;
    };
    /**
     * Gets the msdyn_segmentid property value. 
     * @returns a string
     */
    public get msdyn_segmentid() {
        return this._msdyn_segmentid;
    };
    /**
     * Sets the msdyn_segmentid property value. 
     * @param value Value to set for the msdyn_segmentid property.
     */
    public set msdyn_segmentid(value: string | undefined) {
        this._msdyn_segmentid = value;
    };
    /**
     * Gets the msdyn_Sequence property value. 
     * @returns a msdyn_sequence
     */
    public get msdyn_Sequence() {
        return this._msdyn_Sequence;
    };
    /**
     * Sets the msdyn_Sequence property value. 
     * @param value Value to set for the msdyn_Sequence property.
     */
    public set msdyn_Sequence(value: Msdyn_sequence | undefined) {
        this._msdyn_Sequence = value;
    };
    /**
     * Gets the msdyn_triggertype property value. 
     * @returns a integer
     */
    public get msdyn_triggertype() {
        return this._msdyn_triggertype;
    };
    /**
     * Sets the msdyn_triggertype property value. 
     * @param value Value to set for the msdyn_triggertype property.
     */
    public set msdyn_triggertype(value: number | undefined) {
        this._msdyn_triggertype = value;
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
        writer.writeStringValue("_msdyn_sequence_value", this._msdyn_sequence_value);
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
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeStringValue("msdyn_entityfieldname", this.msdyn_entityfieldname);
        writer.writeStringValue("msdyn_entityfilter", this.msdyn_entityfilter);
        writer.writeCollectionOfObjectValues<Lead>("msdyn_msdyn_segment_lead", this.msdyn_msdyn_segment_lead);
        writer.writeCollectionOfObjectValues<Msdyn_assignmentrule>("msdyn_msdyn_segment_msdyn_assignmentrule_segment", this.msdyn_msdyn_segment_msdyn_assignmentrule_segment);
        writer.writeCollectionOfObjectValues<Msdyn_salesroutingrun>("msdyn_msdyn_segment_msdyn_salesroutingrun_segment", this.msdyn_msdyn_segment_msdyn_salesroutingrun_segment);
        writer.writeCollectionOfObjectValues<Opportunity>("msdyn_msdyn_segment_opportunity", this.msdyn_msdyn_segment_opportunity);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_objecttype", this.msdyn_objecttype);
        writer.writeNumberValue("msdyn_objecttypecode", this.msdyn_objecttypecode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_segment_AsyncOperations", this.msdyn_segment_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_segment_BulkDeleteFailures", this.msdyn_segment_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_segment_DuplicateBaseRecord", this.msdyn_segment_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_segment_DuplicateMatchingRecord", this.msdyn_segment_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_segment_MailboxTrackingFolders", this.msdyn_segment_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_sequencetarget>("msdyn_segment_msdyn_sequencetarget", this.msdyn_segment_msdyn_sequencetarget);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_segment_PrincipalObjectAttributeAccesses", this.msdyn_segment_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_segment_ProcessSession", this.msdyn_segment_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_segment_SyncErrors", this.msdyn_segment_SyncErrors);
        writer.writeStringValue("msdyn_segmentid", this.msdyn_segmentid);
        writer.writeObjectValue<Msdyn_sequence>("msdyn_Sequence", this.msdyn_Sequence);
        writer.writeNumberValue("msdyn_triggertype", this.msdyn_triggertype);
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

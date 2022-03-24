import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookingstatusFromDiscriminatorValue} from './createBookingstatusFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_configurationFromDiscriminatorValue} from './createMsdyn_configurationFromDiscriminatorValue';
import {createMsdyn_requirementstatusFromDiscriminatorValue} from './createMsdyn_requirementstatusFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bookableresourcebooking, Bookingstatus, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_configuration, Msdyn_requirementstatus, Msdyn_resourcerequirement, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_bookingsetupmetadata extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_cloneentityquery_value?: string | undefined;
    private __msdyn_defaultbookingcanceledstatus_value?: string | undefined;
    private __msdyn_defaultbookingcommittedstatus_value?: string | undefined;
    private __msdyn_defaultrequirementactivestatus_value?: string | undefined;
    private __msdyn_defaultrequirementcanceledstatus_value?: string | undefined;
    private __msdyn_defaultrequirementcompletedstatus_value?: string | undefined;
    private __msdyn_retrieveconstraintsquery_value?: string | undefined;
    private __msdyn_retrieveresourcesquery_value?: string | undefined;
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
    private _msdyn_availabledurationminimumpercentage?: number | undefined;
    private _msdyn_bookingrelationshiplogicalname?: string | undefined;
    private _msdyn_bookingsetupmetadata_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_bookingsetupmetadata_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_bookingsetupmetadata_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_bookingsetupmetadata_ProcessSession?: Processsession[] | undefined;
    private _msdyn_bookingsetupmetadata_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_bookingsetupmetadataid?: string | undefined;
    private _msdyn_bookingstatusfieldlogicalname?: string | undefined;
    private _msdyn_cancelbookingswhenmoving?: boolean | undefined;
    private _msdyn_CloneEntityQuery?: Msdyn_configuration | undefined;
    private _msdyn_DefaultBookingCanceledStatus?: Bookingstatus | undefined;
    private _msdyn_DefaultBookingCommittedStatus?: Bookingstatus | undefined;
    private _msdyn_defaultbookingduration?: number | undefined;
    private _msdyn_DefaultRequirementActiveStatus?: Msdyn_requirementstatus | undefined;
    private _msdyn_DefaultRequirementCanceledStatus?: Msdyn_requirementstatus | undefined;
    private _msdyn_DefaultRequirementCompletedStatus?: Msdyn_requirementstatus | undefined;
    private _msdyn_disablerequirementautocreation?: boolean | undefined;
    private _msdyn_enablequickbook?: boolean | undefined;
    private _msdyn_entitylogicalname?: string | undefined;
    private _msdyn_msdyn_bookingsetupmetadata_bookableresour?: Bookableresourcebooking[] | undefined;
    private _msdyn_msdyn_bookingsetupmetadata_msdyn_resource?: Msdyn_resourcerequirement[] | undefined;
    private _msdyn_requirementrelationshiplogicalname?: string | undefined;
    private _msdyn_resourceavailabilityretrievallimit?: number | undefined;
    private _msdyn_RetrieveConstraintsQuery?: Msdyn_configuration | undefined;
    private _msdyn_RetrieveResourcesQuery?: Msdyn_configuration | undefined;
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
     * Gets the _msdyn_cloneentityquery_value property value. 
     * @returns a string
     */
    public get _msdyn_cloneentityquery_value() {
        return this.__msdyn_cloneentityquery_value;
    };
    /**
     * Sets the _msdyn_cloneentityquery_value property value. 
     * @param value Value to set for the _msdyn_cloneentityquery_value property.
     */
    public set _msdyn_cloneentityquery_value(value: string | undefined) {
        this.__msdyn_cloneentityquery_value = value;
    };
    /**
     * Gets the _msdyn_defaultbookingcanceledstatus_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultbookingcanceledstatus_value() {
        return this.__msdyn_defaultbookingcanceledstatus_value;
    };
    /**
     * Sets the _msdyn_defaultbookingcanceledstatus_value property value. 
     * @param value Value to set for the _msdyn_defaultbookingcanceledstatus_value property.
     */
    public set _msdyn_defaultbookingcanceledstatus_value(value: string | undefined) {
        this.__msdyn_defaultbookingcanceledstatus_value = value;
    };
    /**
     * Gets the _msdyn_defaultbookingcommittedstatus_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultbookingcommittedstatus_value() {
        return this.__msdyn_defaultbookingcommittedstatus_value;
    };
    /**
     * Sets the _msdyn_defaultbookingcommittedstatus_value property value. 
     * @param value Value to set for the _msdyn_defaultbookingcommittedstatus_value property.
     */
    public set _msdyn_defaultbookingcommittedstatus_value(value: string | undefined) {
        this.__msdyn_defaultbookingcommittedstatus_value = value;
    };
    /**
     * Gets the _msdyn_defaultrequirementactivestatus_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultrequirementactivestatus_value() {
        return this.__msdyn_defaultrequirementactivestatus_value;
    };
    /**
     * Sets the _msdyn_defaultrequirementactivestatus_value property value. 
     * @param value Value to set for the _msdyn_defaultrequirementactivestatus_value property.
     */
    public set _msdyn_defaultrequirementactivestatus_value(value: string | undefined) {
        this.__msdyn_defaultrequirementactivestatus_value = value;
    };
    /**
     * Gets the _msdyn_defaultrequirementcanceledstatus_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultrequirementcanceledstatus_value() {
        return this.__msdyn_defaultrequirementcanceledstatus_value;
    };
    /**
     * Sets the _msdyn_defaultrequirementcanceledstatus_value property value. 
     * @param value Value to set for the _msdyn_defaultrequirementcanceledstatus_value property.
     */
    public set _msdyn_defaultrequirementcanceledstatus_value(value: string | undefined) {
        this.__msdyn_defaultrequirementcanceledstatus_value = value;
    };
    /**
     * Gets the _msdyn_defaultrequirementcompletedstatus_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultrequirementcompletedstatus_value() {
        return this.__msdyn_defaultrequirementcompletedstatus_value;
    };
    /**
     * Sets the _msdyn_defaultrequirementcompletedstatus_value property value. 
     * @param value Value to set for the _msdyn_defaultrequirementcompletedstatus_value property.
     */
    public set _msdyn_defaultrequirementcompletedstatus_value(value: string | undefined) {
        this.__msdyn_defaultrequirementcompletedstatus_value = value;
    };
    /**
     * Gets the _msdyn_retrieveconstraintsquery_value property value. 
     * @returns a string
     */
    public get _msdyn_retrieveconstraintsquery_value() {
        return this.__msdyn_retrieveconstraintsquery_value;
    };
    /**
     * Sets the _msdyn_retrieveconstraintsquery_value property value. 
     * @param value Value to set for the _msdyn_retrieveconstraintsquery_value property.
     */
    public set _msdyn_retrieveconstraintsquery_value(value: string | undefined) {
        this.__msdyn_retrieveconstraintsquery_value = value;
    };
    /**
     * Gets the _msdyn_retrieveresourcesquery_value property value. 
     * @returns a string
     */
    public get _msdyn_retrieveresourcesquery_value() {
        return this.__msdyn_retrieveresourcesquery_value;
    };
    /**
     * Sets the _msdyn_retrieveresourcesquery_value property value. 
     * @param value Value to set for the _msdyn_retrieveresourcesquery_value property.
     */
    public set _msdyn_retrieveresourcesquery_value(value: string | undefined) {
        this.__msdyn_retrieveresourcesquery_value = value;
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
     * Instantiates a new msdyn_bookingsetupmetadata and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_cloneentityquery_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._msdyn_cloneentityquery_value = n.getStringValue(); },
            "_msdyn_defaultbookingcanceledstatus_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._msdyn_defaultbookingcanceledstatus_value = n.getStringValue(); },
            "_msdyn_defaultbookingcommittedstatus_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._msdyn_defaultbookingcommittedstatus_value = n.getStringValue(); },
            "_msdyn_defaultrequirementactivestatus_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._msdyn_defaultrequirementactivestatus_value = n.getStringValue(); },
            "_msdyn_defaultrequirementcanceledstatus_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._msdyn_defaultrequirementcanceledstatus_value = n.getStringValue(); },
            "_msdyn_defaultrequirementcompletedstatus_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._msdyn_defaultrequirementcompletedstatus_value = n.getStringValue(); },
            "_msdyn_retrieveconstraintsquery_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._msdyn_retrieveconstraintsquery_value = n.getStringValue(); },
            "_msdyn_retrieveresourcesquery_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._msdyn_retrieveresourcesquery_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_availabledurationminimumpercentage": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_availabledurationminimumpercentage = n.getNumberValue(); },
            "msdyn_bookingrelationshiplogicalname": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_bookingrelationshiplogicalname = n.getStringValue(); },
            "msdyn_bookingsetupmetadata_AsyncOperations": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_bookingsetupmetadata_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_bookingsetupmetadata_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_bookingsetupmetadata_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_bookingsetupmetadata_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_bookingsetupmetadata_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_bookingsetupmetadata_ProcessSession": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_bookingsetupmetadata_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_bookingsetupmetadata_SyncErrors": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_bookingsetupmetadata_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_bookingsetupmetadataid": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_bookingsetupmetadataid = n.getStringValue(); },
            "msdyn_bookingstatusfieldlogicalname": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_bookingstatusfieldlogicalname = n.getStringValue(); },
            "msdyn_cancelbookingswhenmoving": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_cancelbookingswhenmoving = n.getBooleanValue(); },
            "msdyn_CloneEntityQuery": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_CloneEntityQuery = n.getObjectValue<Msdyn_configuration>(createMsdyn_configurationFromDiscriminatorValue); },
            "msdyn_DefaultBookingCanceledStatus": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_DefaultBookingCanceledStatus = n.getObjectValue<Bookingstatus>(createBookingstatusFromDiscriminatorValue); },
            "msdyn_DefaultBookingCommittedStatus": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_DefaultBookingCommittedStatus = n.getObjectValue<Bookingstatus>(createBookingstatusFromDiscriminatorValue); },
            "msdyn_defaultbookingduration": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_defaultbookingduration = n.getNumberValue(); },
            "msdyn_DefaultRequirementActiveStatus": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_DefaultRequirementActiveStatus = n.getObjectValue<Msdyn_requirementstatus>(createMsdyn_requirementstatusFromDiscriminatorValue); },
            "msdyn_DefaultRequirementCanceledStatus": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_DefaultRequirementCanceledStatus = n.getObjectValue<Msdyn_requirementstatus>(createMsdyn_requirementstatusFromDiscriminatorValue); },
            "msdyn_DefaultRequirementCompletedStatus": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_DefaultRequirementCompletedStatus = n.getObjectValue<Msdyn_requirementstatus>(createMsdyn_requirementstatusFromDiscriminatorValue); },
            "msdyn_disablerequirementautocreation": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_disablerequirementautocreation = n.getBooleanValue(); },
            "msdyn_enablequickbook": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_enablequickbook = n.getBooleanValue(); },
            "msdyn_entitylogicalname": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_entitylogicalname = n.getStringValue(); },
            "msdyn_msdyn_bookingsetupmetadata_bookableresour": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_msdyn_bookingsetupmetadata_bookableresour = n.getCollectionOfObjectValues<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_msdyn_bookingsetupmetadata_msdyn_resource": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_msdyn_bookingsetupmetadata_msdyn_resource = n.getCollectionOfObjectValues<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "msdyn_requirementrelationshiplogicalname": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_requirementrelationshiplogicalname = n.getStringValue(); },
            "msdyn_resourceavailabilityretrievallimit": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_resourceavailabilityretrievallimit = n.getNumberValue(); },
            "msdyn_RetrieveConstraintsQuery": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_RetrieveConstraintsQuery = n.getObjectValue<Msdyn_configuration>(createMsdyn_configurationFromDiscriminatorValue); },
            "msdyn_RetrieveResourcesQuery": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).msdyn_RetrieveResourcesQuery = n.getObjectValue<Msdyn_configuration>(createMsdyn_configurationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_bookingsetupmetadata).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_availabledurationminimumpercentage property value. 
     * @returns a integer
     */
    public get msdyn_availabledurationminimumpercentage() {
        return this._msdyn_availabledurationminimumpercentage;
    };
    /**
     * Sets the msdyn_availabledurationminimumpercentage property value. 
     * @param value Value to set for the msdyn_availabledurationminimumpercentage property.
     */
    public set msdyn_availabledurationminimumpercentage(value: number | undefined) {
        this._msdyn_availabledurationminimumpercentage = value;
    };
    /**
     * Gets the msdyn_bookingrelationshiplogicalname property value. 
     * @returns a string
     */
    public get msdyn_bookingrelationshiplogicalname() {
        return this._msdyn_bookingrelationshiplogicalname;
    };
    /**
     * Sets the msdyn_bookingrelationshiplogicalname property value. 
     * @param value Value to set for the msdyn_bookingrelationshiplogicalname property.
     */
    public set msdyn_bookingrelationshiplogicalname(value: string | undefined) {
        this._msdyn_bookingrelationshiplogicalname = value;
    };
    /**
     * Gets the msdyn_bookingsetupmetadata_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_bookingsetupmetadata_AsyncOperations() {
        return this._msdyn_bookingsetupmetadata_AsyncOperations;
    };
    /**
     * Sets the msdyn_bookingsetupmetadata_AsyncOperations property value. 
     * @param value Value to set for the msdyn_bookingsetupmetadata_AsyncOperations property.
     */
    public set msdyn_bookingsetupmetadata_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_bookingsetupmetadata_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_bookingsetupmetadata_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_bookingsetupmetadata_BulkDeleteFailures() {
        return this._msdyn_bookingsetupmetadata_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_bookingsetupmetadata_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_bookingsetupmetadata_BulkDeleteFailures property.
     */
    public set msdyn_bookingsetupmetadata_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_bookingsetupmetadata_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_bookingsetupmetadata_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_bookingsetupmetadata_MailboxTrackingFolders() {
        return this._msdyn_bookingsetupmetadata_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_bookingsetupmetadata_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_bookingsetupmetadata_MailboxTrackingFolders property.
     */
    public set msdyn_bookingsetupmetadata_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_bookingsetupmetadata_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses() {
        return this._msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_bookingsetupmetadata_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_bookingsetupmetadata_ProcessSession() {
        return this._msdyn_bookingsetupmetadata_ProcessSession;
    };
    /**
     * Sets the msdyn_bookingsetupmetadata_ProcessSession property value. 
     * @param value Value to set for the msdyn_bookingsetupmetadata_ProcessSession property.
     */
    public set msdyn_bookingsetupmetadata_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_bookingsetupmetadata_ProcessSession = value;
    };
    /**
     * Gets the msdyn_bookingsetupmetadata_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_bookingsetupmetadata_SyncErrors() {
        return this._msdyn_bookingsetupmetadata_SyncErrors;
    };
    /**
     * Sets the msdyn_bookingsetupmetadata_SyncErrors property value. 
     * @param value Value to set for the msdyn_bookingsetupmetadata_SyncErrors property.
     */
    public set msdyn_bookingsetupmetadata_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_bookingsetupmetadata_SyncErrors = value;
    };
    /**
     * Gets the msdyn_bookingsetupmetadataid property value. 
     * @returns a string
     */
    public get msdyn_bookingsetupmetadataid() {
        return this._msdyn_bookingsetupmetadataid;
    };
    /**
     * Sets the msdyn_bookingsetupmetadataid property value. 
     * @param value Value to set for the msdyn_bookingsetupmetadataid property.
     */
    public set msdyn_bookingsetupmetadataid(value: string | undefined) {
        this._msdyn_bookingsetupmetadataid = value;
    };
    /**
     * Gets the msdyn_bookingstatusfieldlogicalname property value. 
     * @returns a string
     */
    public get msdyn_bookingstatusfieldlogicalname() {
        return this._msdyn_bookingstatusfieldlogicalname;
    };
    /**
     * Sets the msdyn_bookingstatusfieldlogicalname property value. 
     * @param value Value to set for the msdyn_bookingstatusfieldlogicalname property.
     */
    public set msdyn_bookingstatusfieldlogicalname(value: string | undefined) {
        this._msdyn_bookingstatusfieldlogicalname = value;
    };
    /**
     * Gets the msdyn_cancelbookingswhenmoving property value. 
     * @returns a boolean
     */
    public get msdyn_cancelbookingswhenmoving() {
        return this._msdyn_cancelbookingswhenmoving;
    };
    /**
     * Sets the msdyn_cancelbookingswhenmoving property value. 
     * @param value Value to set for the msdyn_cancelbookingswhenmoving property.
     */
    public set msdyn_cancelbookingswhenmoving(value: boolean | undefined) {
        this._msdyn_cancelbookingswhenmoving = value;
    };
    /**
     * Gets the msdyn_CloneEntityQuery property value. 
     * @returns a msdyn_configuration
     */
    public get msdyn_CloneEntityQuery() {
        return this._msdyn_CloneEntityQuery;
    };
    /**
     * Sets the msdyn_CloneEntityQuery property value. 
     * @param value Value to set for the msdyn_CloneEntityQuery property.
     */
    public set msdyn_CloneEntityQuery(value: Msdyn_configuration | undefined) {
        this._msdyn_CloneEntityQuery = value;
    };
    /**
     * Gets the msdyn_DefaultBookingCanceledStatus property value. 
     * @returns a bookingstatus
     */
    public get msdyn_DefaultBookingCanceledStatus() {
        return this._msdyn_DefaultBookingCanceledStatus;
    };
    /**
     * Sets the msdyn_DefaultBookingCanceledStatus property value. 
     * @param value Value to set for the msdyn_DefaultBookingCanceledStatus property.
     */
    public set msdyn_DefaultBookingCanceledStatus(value: Bookingstatus | undefined) {
        this._msdyn_DefaultBookingCanceledStatus = value;
    };
    /**
     * Gets the msdyn_DefaultBookingCommittedStatus property value. 
     * @returns a bookingstatus
     */
    public get msdyn_DefaultBookingCommittedStatus() {
        return this._msdyn_DefaultBookingCommittedStatus;
    };
    /**
     * Sets the msdyn_DefaultBookingCommittedStatus property value. 
     * @param value Value to set for the msdyn_DefaultBookingCommittedStatus property.
     */
    public set msdyn_DefaultBookingCommittedStatus(value: Bookingstatus | undefined) {
        this._msdyn_DefaultBookingCommittedStatus = value;
    };
    /**
     * Gets the msdyn_defaultbookingduration property value. 
     * @returns a integer
     */
    public get msdyn_defaultbookingduration() {
        return this._msdyn_defaultbookingduration;
    };
    /**
     * Sets the msdyn_defaultbookingduration property value. 
     * @param value Value to set for the msdyn_defaultbookingduration property.
     */
    public set msdyn_defaultbookingduration(value: number | undefined) {
        this._msdyn_defaultbookingduration = value;
    };
    /**
     * Gets the msdyn_DefaultRequirementActiveStatus property value. 
     * @returns a msdyn_requirementstatus
     */
    public get msdyn_DefaultRequirementActiveStatus() {
        return this._msdyn_DefaultRequirementActiveStatus;
    };
    /**
     * Sets the msdyn_DefaultRequirementActiveStatus property value. 
     * @param value Value to set for the msdyn_DefaultRequirementActiveStatus property.
     */
    public set msdyn_DefaultRequirementActiveStatus(value: Msdyn_requirementstatus | undefined) {
        this._msdyn_DefaultRequirementActiveStatus = value;
    };
    /**
     * Gets the msdyn_DefaultRequirementCanceledStatus property value. 
     * @returns a msdyn_requirementstatus
     */
    public get msdyn_DefaultRequirementCanceledStatus() {
        return this._msdyn_DefaultRequirementCanceledStatus;
    };
    /**
     * Sets the msdyn_DefaultRequirementCanceledStatus property value. 
     * @param value Value to set for the msdyn_DefaultRequirementCanceledStatus property.
     */
    public set msdyn_DefaultRequirementCanceledStatus(value: Msdyn_requirementstatus | undefined) {
        this._msdyn_DefaultRequirementCanceledStatus = value;
    };
    /**
     * Gets the msdyn_DefaultRequirementCompletedStatus property value. 
     * @returns a msdyn_requirementstatus
     */
    public get msdyn_DefaultRequirementCompletedStatus() {
        return this._msdyn_DefaultRequirementCompletedStatus;
    };
    /**
     * Sets the msdyn_DefaultRequirementCompletedStatus property value. 
     * @param value Value to set for the msdyn_DefaultRequirementCompletedStatus property.
     */
    public set msdyn_DefaultRequirementCompletedStatus(value: Msdyn_requirementstatus | undefined) {
        this._msdyn_DefaultRequirementCompletedStatus = value;
    };
    /**
     * Gets the msdyn_disablerequirementautocreation property value. 
     * @returns a boolean
     */
    public get msdyn_disablerequirementautocreation() {
        return this._msdyn_disablerequirementautocreation;
    };
    /**
     * Sets the msdyn_disablerequirementautocreation property value. 
     * @param value Value to set for the msdyn_disablerequirementautocreation property.
     */
    public set msdyn_disablerequirementautocreation(value: boolean | undefined) {
        this._msdyn_disablerequirementautocreation = value;
    };
    /**
     * Gets the msdyn_enablequickbook property value. 
     * @returns a boolean
     */
    public get msdyn_enablequickbook() {
        return this._msdyn_enablequickbook;
    };
    /**
     * Sets the msdyn_enablequickbook property value. 
     * @param value Value to set for the msdyn_enablequickbook property.
     */
    public set msdyn_enablequickbook(value: boolean | undefined) {
        this._msdyn_enablequickbook = value;
    };
    /**
     * Gets the msdyn_entitylogicalname property value. 
     * @returns a string
     */
    public get msdyn_entitylogicalname() {
        return this._msdyn_entitylogicalname;
    };
    /**
     * Sets the msdyn_entitylogicalname property value. 
     * @param value Value to set for the msdyn_entitylogicalname property.
     */
    public set msdyn_entitylogicalname(value: string | undefined) {
        this._msdyn_entitylogicalname = value;
    };
    /**
     * Gets the msdyn_msdyn_bookingsetupmetadata_bookableresour property value. 
     * @returns a bookableresourcebooking
     */
    public get msdyn_msdyn_bookingsetupmetadata_bookableresour() {
        return this._msdyn_msdyn_bookingsetupmetadata_bookableresour;
    };
    /**
     * Sets the msdyn_msdyn_bookingsetupmetadata_bookableresour property value. 
     * @param value Value to set for the msdyn_msdyn_bookingsetupmetadata_bookableresour property.
     */
    public set msdyn_msdyn_bookingsetupmetadata_bookableresour(value: Bookableresourcebooking[] | undefined) {
        this._msdyn_msdyn_bookingsetupmetadata_bookableresour = value;
    };
    /**
     * Gets the msdyn_msdyn_bookingsetupmetadata_msdyn_resource property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_msdyn_bookingsetupmetadata_msdyn_resource() {
        return this._msdyn_msdyn_bookingsetupmetadata_msdyn_resource;
    };
    /**
     * Sets the msdyn_msdyn_bookingsetupmetadata_msdyn_resource property value. 
     * @param value Value to set for the msdyn_msdyn_bookingsetupmetadata_msdyn_resource property.
     */
    public set msdyn_msdyn_bookingsetupmetadata_msdyn_resource(value: Msdyn_resourcerequirement[] | undefined) {
        this._msdyn_msdyn_bookingsetupmetadata_msdyn_resource = value;
    };
    /**
     * Gets the msdyn_requirementrelationshiplogicalname property value. 
     * @returns a string
     */
    public get msdyn_requirementrelationshiplogicalname() {
        return this._msdyn_requirementrelationshiplogicalname;
    };
    /**
     * Sets the msdyn_requirementrelationshiplogicalname property value. 
     * @param value Value to set for the msdyn_requirementrelationshiplogicalname property.
     */
    public set msdyn_requirementrelationshiplogicalname(value: string | undefined) {
        this._msdyn_requirementrelationshiplogicalname = value;
    };
    /**
     * Gets the msdyn_resourceavailabilityretrievallimit property value. 
     * @returns a integer
     */
    public get msdyn_resourceavailabilityretrievallimit() {
        return this._msdyn_resourceavailabilityretrievallimit;
    };
    /**
     * Sets the msdyn_resourceavailabilityretrievallimit property value. 
     * @param value Value to set for the msdyn_resourceavailabilityretrievallimit property.
     */
    public set msdyn_resourceavailabilityretrievallimit(value: number | undefined) {
        this._msdyn_resourceavailabilityretrievallimit = value;
    };
    /**
     * Gets the msdyn_RetrieveConstraintsQuery property value. 
     * @returns a msdyn_configuration
     */
    public get msdyn_RetrieveConstraintsQuery() {
        return this._msdyn_RetrieveConstraintsQuery;
    };
    /**
     * Sets the msdyn_RetrieveConstraintsQuery property value. 
     * @param value Value to set for the msdyn_RetrieveConstraintsQuery property.
     */
    public set msdyn_RetrieveConstraintsQuery(value: Msdyn_configuration | undefined) {
        this._msdyn_RetrieveConstraintsQuery = value;
    };
    /**
     * Gets the msdyn_RetrieveResourcesQuery property value. 
     * @returns a msdyn_configuration
     */
    public get msdyn_RetrieveResourcesQuery() {
        return this._msdyn_RetrieveResourcesQuery;
    };
    /**
     * Sets the msdyn_RetrieveResourcesQuery property value. 
     * @param value Value to set for the msdyn_RetrieveResourcesQuery property.
     */
    public set msdyn_RetrieveResourcesQuery(value: Msdyn_configuration | undefined) {
        this._msdyn_RetrieveResourcesQuery = value;
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
        writer.writeStringValue("_msdyn_cloneentityquery_value", this._msdyn_cloneentityquery_value);
        writer.writeStringValue("_msdyn_defaultbookingcanceledstatus_value", this._msdyn_defaultbookingcanceledstatus_value);
        writer.writeStringValue("_msdyn_defaultbookingcommittedstatus_value", this._msdyn_defaultbookingcommittedstatus_value);
        writer.writeStringValue("_msdyn_defaultrequirementactivestatus_value", this._msdyn_defaultrequirementactivestatus_value);
        writer.writeStringValue("_msdyn_defaultrequirementcanceledstatus_value", this._msdyn_defaultrequirementcanceledstatus_value);
        writer.writeStringValue("_msdyn_defaultrequirementcompletedstatus_value", this._msdyn_defaultrequirementcompletedstatus_value);
        writer.writeStringValue("_msdyn_retrieveconstraintsquery_value", this._msdyn_retrieveconstraintsquery_value);
        writer.writeStringValue("_msdyn_retrieveresourcesquery_value", this._msdyn_retrieveresourcesquery_value);
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
        writer.writeNumberValue("msdyn_availabledurationminimumpercentage", this.msdyn_availabledurationminimumpercentage);
        writer.writeStringValue("msdyn_bookingrelationshiplogicalname", this.msdyn_bookingrelationshiplogicalname);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_bookingsetupmetadata_AsyncOperations", this.msdyn_bookingsetupmetadata_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_bookingsetupmetadata_BulkDeleteFailures", this.msdyn_bookingsetupmetadata_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_bookingsetupmetadata_MailboxTrackingFolders", this.msdyn_bookingsetupmetadata_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses", this.msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_bookingsetupmetadata_ProcessSession", this.msdyn_bookingsetupmetadata_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_bookingsetupmetadata_SyncErrors", this.msdyn_bookingsetupmetadata_SyncErrors);
        writer.writeStringValue("msdyn_bookingsetupmetadataid", this.msdyn_bookingsetupmetadataid);
        writer.writeStringValue("msdyn_bookingstatusfieldlogicalname", this.msdyn_bookingstatusfieldlogicalname);
        writer.writeBooleanValue("msdyn_cancelbookingswhenmoving", this.msdyn_cancelbookingswhenmoving);
        writer.writeObjectValue<Msdyn_configuration>("msdyn_CloneEntityQuery", this.msdyn_CloneEntityQuery);
        writer.writeObjectValue<Bookingstatus>("msdyn_DefaultBookingCanceledStatus", this.msdyn_DefaultBookingCanceledStatus);
        writer.writeObjectValue<Bookingstatus>("msdyn_DefaultBookingCommittedStatus", this.msdyn_DefaultBookingCommittedStatus);
        writer.writeNumberValue("msdyn_defaultbookingduration", this.msdyn_defaultbookingduration);
        writer.writeObjectValue<Msdyn_requirementstatus>("msdyn_DefaultRequirementActiveStatus", this.msdyn_DefaultRequirementActiveStatus);
        writer.writeObjectValue<Msdyn_requirementstatus>("msdyn_DefaultRequirementCanceledStatus", this.msdyn_DefaultRequirementCanceledStatus);
        writer.writeObjectValue<Msdyn_requirementstatus>("msdyn_DefaultRequirementCompletedStatus", this.msdyn_DefaultRequirementCompletedStatus);
        writer.writeBooleanValue("msdyn_disablerequirementautocreation", this.msdyn_disablerequirementautocreation);
        writer.writeBooleanValue("msdyn_enablequickbook", this.msdyn_enablequickbook);
        writer.writeStringValue("msdyn_entitylogicalname", this.msdyn_entitylogicalname);
        writer.writeCollectionOfObjectValues<Bookableresourcebooking>("msdyn_msdyn_bookingsetupmetadata_bookableresour", this.msdyn_msdyn_bookingsetupmetadata_bookableresour);
        writer.writeCollectionOfObjectValues<Msdyn_resourcerequirement>("msdyn_msdyn_bookingsetupmetadata_msdyn_resource", this.msdyn_msdyn_bookingsetupmetadata_msdyn_resource);
        writer.writeStringValue("msdyn_requirementrelationshiplogicalname", this.msdyn_requirementrelationshiplogicalname);
        writer.writeNumberValue("msdyn_resourceavailabilityretrievallimit", this.msdyn_resourceavailabilityretrievallimit);
        writer.writeObjectValue<Msdyn_configuration>("msdyn_RetrieveConstraintsQuery", this.msdyn_RetrieveConstraintsQuery);
        writer.writeObjectValue<Msdyn_configuration>("msdyn_RetrieveResourcesQuery", this.msdyn_RetrieveResourcesQuery);
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

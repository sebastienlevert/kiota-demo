import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRatingvalueFromDiscriminatorValue} from './createRatingvalueFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Ratingvalue, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Ratingmodel extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _maxratingvalue?: number | undefined;
    private _minratingvalue?: number | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _msdyn_ratableentity?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _ratingmodel_AsyncOperations?: Asyncoperation[] | undefined;
    private _ratingmodel_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _ratingmodel_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _ratingmodel_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _ratingmodel_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _ratingmodel_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _ratingmodel_ProcessSession?: Processsession[] | undefined;
    private _ratingmodel_ratingvalue_RatingModel?: Ratingvalue[] | undefined;
    private _ratingModel_SyncErrors?: Syncerror[] | undefined;
    private _ratingmodelid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new ratingmodel and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdbyname property value. 
     * @returns a systemuser
     */
    public get createdbyname() {
        return this._createdbyname;
    };
    /**
     * Sets the createdbyname property value. 
     * @param value Value to set for the createdbyname property.
     */
    public set createdbyname(value: Systemuser | undefined) {
        this._createdbyname = value;
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
     * Gets the createdonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get createdonbehalfbyname() {
        return this._createdonbehalfbyname;
    };
    /**
     * Sets the createdonbehalfbyname property value. 
     * @param value Value to set for the createdonbehalfbyname property.
     */
    public set createdonbehalfbyname(value: Systemuser | undefined) {
        this._createdonbehalfbyname = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Ratingmodel)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Ratingmodel)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Ratingmodel)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Ratingmodel)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Ratingmodel)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Ratingmodel)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Ratingmodel)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Ratingmodel)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Ratingmodel)._transactioncurrencyid_value = n.getStringValue(); },
            "createdbyname": (o, n) => { (o as unknown as Ratingmodel).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Ratingmodel).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Ratingmodel).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Ratingmodel).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Ratingmodel).importsequencenumber = n.getNumberValue(); },
            "maxratingvalue": (o, n) => { (o as unknown as Ratingmodel).maxratingvalue = n.getNumberValue(); },
            "minratingvalue": (o, n) => { (o as unknown as Ratingmodel).minratingvalue = n.getNumberValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Ratingmodel).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Ratingmodel).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Ratingmodel).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_ratableentity": (o, n) => { (o as unknown as Ratingmodel).msdyn_ratableentity = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Ratingmodel).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Ratingmodel).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Ratingmodel).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Ratingmodel).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Ratingmodel).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Ratingmodel).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "ratingmodel_AsyncOperations": (o, n) => { (o as unknown as Ratingmodel).ratingmodel_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "ratingmodel_BulkDeleteFailures": (o, n) => { (o as unknown as Ratingmodel).ratingmodel_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "ratingmodel_DuplicateBaseRecord": (o, n) => { (o as unknown as Ratingmodel).ratingmodel_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "ratingmodel_DuplicateMatchingRecord": (o, n) => { (o as unknown as Ratingmodel).ratingmodel_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "ratingmodel_MailboxTrackingFolders": (o, n) => { (o as unknown as Ratingmodel).ratingmodel_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "ratingmodel_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Ratingmodel).ratingmodel_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "ratingmodel_ProcessSession": (o, n) => { (o as unknown as Ratingmodel).ratingmodel_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "ratingmodel_ratingvalue_RatingModel": (o, n) => { (o as unknown as Ratingmodel).ratingmodel_ratingvalue_RatingModel = n.getCollectionOfObjectValues<Ratingvalue>(createRatingvalueFromDiscriminatorValue); },
            "ratingModel_SyncErrors": (o, n) => { (o as unknown as Ratingmodel).ratingModel_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "ratingmodelid": (o, n) => { (o as unknown as Ratingmodel).ratingmodelid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Ratingmodel).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Ratingmodel).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Ratingmodel).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Ratingmodel).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Ratingmodel).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Ratingmodel).versionnumber = n.getNumberValue(); },
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
     * Gets the maxratingvalue property value. 
     * @returns a integer
     */
    public get maxratingvalue() {
        return this._maxratingvalue;
    };
    /**
     * Sets the maxratingvalue property value. 
     * @param value Value to set for the maxratingvalue property.
     */
    public set maxratingvalue(value: number | undefined) {
        this._maxratingvalue = value;
    };
    /**
     * Gets the minratingvalue property value. 
     * @returns a integer
     */
    public get minratingvalue() {
        return this._minratingvalue;
    };
    /**
     * Sets the minratingvalue property value. 
     * @param value Value to set for the minratingvalue property.
     */
    public set minratingvalue(value: number | undefined) {
        this._minratingvalue = value;
    };
    /**
     * Gets the modifiedbyname property value. 
     * @returns a systemuser
     */
    public get modifiedbyname() {
        return this._modifiedbyname;
    };
    /**
     * Sets the modifiedbyname property value. 
     * @param value Value to set for the modifiedbyname property.
     */
    public set modifiedbyname(value: Systemuser | undefined) {
        this._modifiedbyname = value;
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
     * Gets the modifiedonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfbyname() {
        return this._modifiedonbehalfbyname;
    };
    /**
     * Sets the modifiedonbehalfbyname property value. 
     * @param value Value to set for the modifiedonbehalfbyname property.
     */
    public set modifiedonbehalfbyname(value: Systemuser | undefined) {
        this._modifiedonbehalfbyname = value;
    };
    /**
     * Gets the msdyn_ratableentity property value. 
     * @returns a integer
     */
    public get msdyn_ratableentity() {
        return this._msdyn_ratableentity;
    };
    /**
     * Sets the msdyn_ratableentity property value. 
     * @param value Value to set for the msdyn_ratableentity property.
     */
    public set msdyn_ratableentity(value: number | undefined) {
        this._msdyn_ratableentity = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Gets the ratingmodel_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get ratingmodel_AsyncOperations() {
        return this._ratingmodel_AsyncOperations;
    };
    /**
     * Sets the ratingmodel_AsyncOperations property value. 
     * @param value Value to set for the ratingmodel_AsyncOperations property.
     */
    public set ratingmodel_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._ratingmodel_AsyncOperations = value;
    };
    /**
     * Gets the ratingmodel_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get ratingmodel_BulkDeleteFailures() {
        return this._ratingmodel_BulkDeleteFailures;
    };
    /**
     * Sets the ratingmodel_BulkDeleteFailures property value. 
     * @param value Value to set for the ratingmodel_BulkDeleteFailures property.
     */
    public set ratingmodel_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._ratingmodel_BulkDeleteFailures = value;
    };
    /**
     * Gets the ratingmodel_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get ratingmodel_DuplicateBaseRecord() {
        return this._ratingmodel_DuplicateBaseRecord;
    };
    /**
     * Sets the ratingmodel_DuplicateBaseRecord property value. 
     * @param value Value to set for the ratingmodel_DuplicateBaseRecord property.
     */
    public set ratingmodel_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._ratingmodel_DuplicateBaseRecord = value;
    };
    /**
     * Gets the ratingmodel_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get ratingmodel_DuplicateMatchingRecord() {
        return this._ratingmodel_DuplicateMatchingRecord;
    };
    /**
     * Sets the ratingmodel_DuplicateMatchingRecord property value. 
     * @param value Value to set for the ratingmodel_DuplicateMatchingRecord property.
     */
    public set ratingmodel_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._ratingmodel_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the ratingmodel_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get ratingmodel_MailboxTrackingFolders() {
        return this._ratingmodel_MailboxTrackingFolders;
    };
    /**
     * Sets the ratingmodel_MailboxTrackingFolders property value. 
     * @param value Value to set for the ratingmodel_MailboxTrackingFolders property.
     */
    public set ratingmodel_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._ratingmodel_MailboxTrackingFolders = value;
    };
    /**
     * Gets the ratingmodel_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get ratingmodel_PrincipalObjectAttributeAccesses() {
        return this._ratingmodel_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the ratingmodel_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the ratingmodel_PrincipalObjectAttributeAccesses property.
     */
    public set ratingmodel_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._ratingmodel_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the ratingmodel_ProcessSession property value. 
     * @returns a processsession
     */
    public get ratingmodel_ProcessSession() {
        return this._ratingmodel_ProcessSession;
    };
    /**
     * Sets the ratingmodel_ProcessSession property value. 
     * @param value Value to set for the ratingmodel_ProcessSession property.
     */
    public set ratingmodel_ProcessSession(value: Processsession[] | undefined) {
        this._ratingmodel_ProcessSession = value;
    };
    /**
     * Gets the ratingmodel_ratingvalue_RatingModel property value. 
     * @returns a ratingvalue
     */
    public get ratingmodel_ratingvalue_RatingModel() {
        return this._ratingmodel_ratingvalue_RatingModel;
    };
    /**
     * Sets the ratingmodel_ratingvalue_RatingModel property value. 
     * @param value Value to set for the ratingmodel_ratingvalue_RatingModel property.
     */
    public set ratingmodel_ratingvalue_RatingModel(value: Ratingvalue[] | undefined) {
        this._ratingmodel_ratingvalue_RatingModel = value;
    };
    /**
     * Gets the ratingModel_SyncErrors property value. 
     * @returns a syncerror
     */
    public get ratingModel_SyncErrors() {
        return this._ratingModel_SyncErrors;
    };
    /**
     * Sets the ratingModel_SyncErrors property value. 
     * @param value Value to set for the RatingModel_SyncErrors property.
     */
    public set ratingModel_SyncErrors(value: Syncerror[] | undefined) {
        this._ratingModel_SyncErrors = value;
    };
    /**
     * Gets the ratingmodelid property value. 
     * @returns a string
     */
    public get ratingmodelid() {
        return this._ratingmodelid;
    };
    /**
     * Sets the ratingmodelid property value. 
     * @param value Value to set for the ratingmodelid property.
     */
    public set ratingmodelid(value: string | undefined) {
        this._ratingmodelid = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("maxratingvalue", this.maxratingvalue);
        writer.writeNumberValue("minratingvalue", this.minratingvalue);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeNumberValue("msdyn_ratableentity", this.msdyn_ratableentity);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeCollectionOfObjectValues<Asyncoperation>("ratingmodel_AsyncOperations", this.ratingmodel_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("ratingmodel_BulkDeleteFailures", this.ratingmodel_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("ratingmodel_DuplicateBaseRecord", this.ratingmodel_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("ratingmodel_DuplicateMatchingRecord", this.ratingmodel_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("ratingmodel_MailboxTrackingFolders", this.ratingmodel_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("ratingmodel_PrincipalObjectAttributeAccesses", this.ratingmodel_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("ratingmodel_ProcessSession", this.ratingmodel_ProcessSession);
        writer.writeCollectionOfObjectValues<Ratingvalue>("ratingmodel_ratingvalue_RatingModel", this.ratingmodel_ratingvalue_RatingModel);
        writer.writeCollectionOfObjectValues<Syncerror>("ratingModel_SyncErrors", this.ratingModel_SyncErrors);
        writer.writeStringValue("ratingmodelid", this.ratingmodelid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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

import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_opportunitymodelconfig extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyn_activeopportunityvalue?: string | undefined;
    private _msdyn_appliedon?: Date | undefined;
    private _msdyn_createonfield?: string | undefined;
    private _msdyn_disqualificationvalue?: string | undefined;
    private _msdyn_featurestate?: string | undefined;
    private _msdyn_isstandardentity?: boolean | undefined;
    private _msdyn_modifiedonfield?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_opportunityentityid?: string | undefined;
    private _msdyn_opportunityentityname?: string | undefined;
    private _msdyn_opportunityformid?: string | undefined;
    private _msdyn_opportunityformname?: string | undefined;
    private _msdyn_opportunitymodelconfig_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_opportunitymodelconfig_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_opportunitymodelconfig_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_opportunitymodelconfig_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_opportunitymodelconfig_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_opportunitymodelconfig_ProcessSession?: Processsession[] | undefined;
    private _msdyn_opportunitymodelconfig_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_opportunitymodelconfigid?: string | undefined;
    private _msdyn_opportunityviewid?: string | undefined;
    private _msdyn_opportunityviewname?: string | undefined;
    private _msdyn_predictionname?: string | undefined;
    private _msdyn_qualificationvalue?: string | undefined;
    private _msdyn_statusfield?: string | undefined;
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
     * Instantiates a new msdyn_opportunitymodelconfig and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_activeopportunityvalue": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_activeopportunityvalue = n.getStringValue(); },
            "msdyn_appliedon": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_appliedon = n.getDateValue(); },
            "msdyn_createonfield": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_createonfield = n.getStringValue(); },
            "msdyn_disqualificationvalue": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_disqualificationvalue = n.getStringValue(); },
            "msdyn_featurestate": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_featurestate = n.getStringValue(); },
            "msdyn_isstandardentity": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_isstandardentity = n.getBooleanValue(); },
            "msdyn_modifiedonfield": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_modifiedonfield = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_name = n.getStringValue(); },
            "msdyn_opportunityentityid": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunityentityid = n.getStringValue(); },
            "msdyn_opportunityentityname": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunityentityname = n.getStringValue(); },
            "msdyn_opportunityformid": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunityformid = n.getStringValue(); },
            "msdyn_opportunityformname": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunityformname = n.getStringValue(); },
            "msdyn_opportunitymodelconfig_AsyncOperations": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunitymodelconfig_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_opportunitymodelconfig_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunitymodelconfig_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_opportunitymodelconfig_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunitymodelconfig_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_opportunitymodelconfig_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunitymodelconfig_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_opportunitymodelconfig_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunitymodelconfig_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_opportunitymodelconfig_ProcessSession": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunitymodelconfig_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_opportunitymodelconfig_SyncErrors": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunitymodelconfig_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_opportunitymodelconfigid": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunitymodelconfigid = n.getStringValue(); },
            "msdyn_opportunityviewid": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunityviewid = n.getStringValue(); },
            "msdyn_opportunityviewname": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_opportunityviewname = n.getStringValue(); },
            "msdyn_predictionname": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_predictionname = n.getStringValue(); },
            "msdyn_qualificationvalue": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_qualificationvalue = n.getStringValue(); },
            "msdyn_statusfield": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).msdyn_statusfield = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_opportunitymodelconfig).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_activeopportunityvalue property value. 
     * @returns a string
     */
    public get msdyn_activeopportunityvalue() {
        return this._msdyn_activeopportunityvalue;
    };
    /**
     * Sets the msdyn_activeopportunityvalue property value. 
     * @param value Value to set for the msdyn_activeopportunityvalue property.
     */
    public set msdyn_activeopportunityvalue(value: string | undefined) {
        this._msdyn_activeopportunityvalue = value;
    };
    /**
     * Gets the msdyn_appliedon property value. 
     * @returns a Date
     */
    public get msdyn_appliedon() {
        return this._msdyn_appliedon;
    };
    /**
     * Sets the msdyn_appliedon property value. 
     * @param value Value to set for the msdyn_appliedon property.
     */
    public set msdyn_appliedon(value: Date | undefined) {
        this._msdyn_appliedon = value;
    };
    /**
     * Gets the msdyn_createonfield property value. 
     * @returns a string
     */
    public get msdyn_createonfield() {
        return this._msdyn_createonfield;
    };
    /**
     * Sets the msdyn_createonfield property value. 
     * @param value Value to set for the msdyn_createonfield property.
     */
    public set msdyn_createonfield(value: string | undefined) {
        this._msdyn_createonfield = value;
    };
    /**
     * Gets the msdyn_disqualificationvalue property value. 
     * @returns a string
     */
    public get msdyn_disqualificationvalue() {
        return this._msdyn_disqualificationvalue;
    };
    /**
     * Sets the msdyn_disqualificationvalue property value. 
     * @param value Value to set for the msdyn_disqualificationvalue property.
     */
    public set msdyn_disqualificationvalue(value: string | undefined) {
        this._msdyn_disqualificationvalue = value;
    };
    /**
     * Gets the msdyn_featurestate property value. 
     * @returns a string
     */
    public get msdyn_featurestate() {
        return this._msdyn_featurestate;
    };
    /**
     * Sets the msdyn_featurestate property value. 
     * @param value Value to set for the msdyn_featurestate property.
     */
    public set msdyn_featurestate(value: string | undefined) {
        this._msdyn_featurestate = value;
    };
    /**
     * Gets the msdyn_isstandardentity property value. 
     * @returns a boolean
     */
    public get msdyn_isstandardentity() {
        return this._msdyn_isstandardentity;
    };
    /**
     * Sets the msdyn_isstandardentity property value. 
     * @param value Value to set for the msdyn_isstandardentity property.
     */
    public set msdyn_isstandardentity(value: boolean | undefined) {
        this._msdyn_isstandardentity = value;
    };
    /**
     * Gets the msdyn_modifiedonfield property value. 
     * @returns a string
     */
    public get msdyn_modifiedonfield() {
        return this._msdyn_modifiedonfield;
    };
    /**
     * Sets the msdyn_modifiedonfield property value. 
     * @param value Value to set for the msdyn_modifiedonfield property.
     */
    public set msdyn_modifiedonfield(value: string | undefined) {
        this._msdyn_modifiedonfield = value;
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
     * Gets the msdyn_opportunityentityid property value. 
     * @returns a string
     */
    public get msdyn_opportunityentityid() {
        return this._msdyn_opportunityentityid;
    };
    /**
     * Sets the msdyn_opportunityentityid property value. 
     * @param value Value to set for the msdyn_opportunityentityid property.
     */
    public set msdyn_opportunityentityid(value: string | undefined) {
        this._msdyn_opportunityentityid = value;
    };
    /**
     * Gets the msdyn_opportunityentityname property value. 
     * @returns a string
     */
    public get msdyn_opportunityentityname() {
        return this._msdyn_opportunityentityname;
    };
    /**
     * Sets the msdyn_opportunityentityname property value. 
     * @param value Value to set for the msdyn_opportunityentityname property.
     */
    public set msdyn_opportunityentityname(value: string | undefined) {
        this._msdyn_opportunityentityname = value;
    };
    /**
     * Gets the msdyn_opportunityformid property value. 
     * @returns a string
     */
    public get msdyn_opportunityformid() {
        return this._msdyn_opportunityformid;
    };
    /**
     * Sets the msdyn_opportunityformid property value. 
     * @param value Value to set for the msdyn_opportunityformid property.
     */
    public set msdyn_opportunityformid(value: string | undefined) {
        this._msdyn_opportunityformid = value;
    };
    /**
     * Gets the msdyn_opportunityformname property value. 
     * @returns a string
     */
    public get msdyn_opportunityformname() {
        return this._msdyn_opportunityformname;
    };
    /**
     * Sets the msdyn_opportunityformname property value. 
     * @param value Value to set for the msdyn_opportunityformname property.
     */
    public set msdyn_opportunityformname(value: string | undefined) {
        this._msdyn_opportunityformname = value;
    };
    /**
     * Gets the msdyn_opportunitymodelconfig_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_opportunitymodelconfig_AsyncOperations() {
        return this._msdyn_opportunitymodelconfig_AsyncOperations;
    };
    /**
     * Sets the msdyn_opportunitymodelconfig_AsyncOperations property value. 
     * @param value Value to set for the msdyn_opportunitymodelconfig_AsyncOperations property.
     */
    public set msdyn_opportunitymodelconfig_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_opportunitymodelconfig_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_opportunitymodelconfig_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_opportunitymodelconfig_BulkDeleteFailures() {
        return this._msdyn_opportunitymodelconfig_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_opportunitymodelconfig_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_opportunitymodelconfig_BulkDeleteFailures property.
     */
    public set msdyn_opportunitymodelconfig_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_opportunitymodelconfig_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_opportunitymodelconfig_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_opportunitymodelconfig_DuplicateBaseRecord() {
        return this._msdyn_opportunitymodelconfig_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_opportunitymodelconfig_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_opportunitymodelconfig_DuplicateBaseRecord property.
     */
    public set msdyn_opportunitymodelconfig_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_opportunitymodelconfig_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_opportunitymodelconfig_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_opportunitymodelconfig_DuplicateMatchingRecord() {
        return this._msdyn_opportunitymodelconfig_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_opportunitymodelconfig_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_opportunitymodelconfig_DuplicateMatchingRecord property.
     */
    public set msdyn_opportunitymodelconfig_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_opportunitymodelconfig_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_opportunitymodelconfig_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_opportunitymodelconfig_MailboxTrackingFolders() {
        return this._msdyn_opportunitymodelconfig_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_opportunitymodelconfig_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_opportunitymodelconfig_MailboxTrackingFolders property.
     */
    public set msdyn_opportunitymodelconfig_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_opportunitymodelconfig_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses() {
        return this._msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_opportunitymodelconfig_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_opportunitymodelconfig_ProcessSession() {
        return this._msdyn_opportunitymodelconfig_ProcessSession;
    };
    /**
     * Sets the msdyn_opportunitymodelconfig_ProcessSession property value. 
     * @param value Value to set for the msdyn_opportunitymodelconfig_ProcessSession property.
     */
    public set msdyn_opportunitymodelconfig_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_opportunitymodelconfig_ProcessSession = value;
    };
    /**
     * Gets the msdyn_opportunitymodelconfig_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_opportunitymodelconfig_SyncErrors() {
        return this._msdyn_opportunitymodelconfig_SyncErrors;
    };
    /**
     * Sets the msdyn_opportunitymodelconfig_SyncErrors property value. 
     * @param value Value to set for the msdyn_opportunitymodelconfig_SyncErrors property.
     */
    public set msdyn_opportunitymodelconfig_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_opportunitymodelconfig_SyncErrors = value;
    };
    /**
     * Gets the msdyn_opportunitymodelconfigid property value. 
     * @returns a string
     */
    public get msdyn_opportunitymodelconfigid() {
        return this._msdyn_opportunitymodelconfigid;
    };
    /**
     * Sets the msdyn_opportunitymodelconfigid property value. 
     * @param value Value to set for the msdyn_opportunitymodelconfigid property.
     */
    public set msdyn_opportunitymodelconfigid(value: string | undefined) {
        this._msdyn_opportunitymodelconfigid = value;
    };
    /**
     * Gets the msdyn_opportunityviewid property value. 
     * @returns a string
     */
    public get msdyn_opportunityviewid() {
        return this._msdyn_opportunityviewid;
    };
    /**
     * Sets the msdyn_opportunityviewid property value. 
     * @param value Value to set for the msdyn_opportunityviewid property.
     */
    public set msdyn_opportunityviewid(value: string | undefined) {
        this._msdyn_opportunityviewid = value;
    };
    /**
     * Gets the msdyn_opportunityviewname property value. 
     * @returns a string
     */
    public get msdyn_opportunityviewname() {
        return this._msdyn_opportunityviewname;
    };
    /**
     * Sets the msdyn_opportunityviewname property value. 
     * @param value Value to set for the msdyn_opportunityviewname property.
     */
    public set msdyn_opportunityviewname(value: string | undefined) {
        this._msdyn_opportunityviewname = value;
    };
    /**
     * Gets the msdyn_predictionname property value. 
     * @returns a string
     */
    public get msdyn_predictionname() {
        return this._msdyn_predictionname;
    };
    /**
     * Sets the msdyn_predictionname property value. 
     * @param value Value to set for the msdyn_predictionname property.
     */
    public set msdyn_predictionname(value: string | undefined) {
        this._msdyn_predictionname = value;
    };
    /**
     * Gets the msdyn_qualificationvalue property value. 
     * @returns a string
     */
    public get msdyn_qualificationvalue() {
        return this._msdyn_qualificationvalue;
    };
    /**
     * Sets the msdyn_qualificationvalue property value. 
     * @param value Value to set for the msdyn_qualificationvalue property.
     */
    public set msdyn_qualificationvalue(value: string | undefined) {
        this._msdyn_qualificationvalue = value;
    };
    /**
     * Gets the msdyn_statusfield property value. 
     * @returns a string
     */
    public get msdyn_statusfield() {
        return this._msdyn_statusfield;
    };
    /**
     * Sets the msdyn_statusfield property value. 
     * @param value Value to set for the msdyn_statusfield property.
     */
    public set msdyn_statusfield(value: string | undefined) {
        this._msdyn_statusfield = value;
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
        writer.writeStringValue("msdyn_activeopportunityvalue", this.msdyn_activeopportunityvalue);
        writer.writeDateValue("msdyn_appliedon", this.msdyn_appliedon);
        writer.writeStringValue("msdyn_createonfield", this.msdyn_createonfield);
        writer.writeStringValue("msdyn_disqualificationvalue", this.msdyn_disqualificationvalue);
        writer.writeStringValue("msdyn_featurestate", this.msdyn_featurestate);
        writer.writeBooleanValue("msdyn_isstandardentity", this.msdyn_isstandardentity);
        writer.writeStringValue("msdyn_modifiedonfield", this.msdyn_modifiedonfield);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_opportunityentityid", this.msdyn_opportunityentityid);
        writer.writeStringValue("msdyn_opportunityentityname", this.msdyn_opportunityentityname);
        writer.writeStringValue("msdyn_opportunityformid", this.msdyn_opportunityformid);
        writer.writeStringValue("msdyn_opportunityformname", this.msdyn_opportunityformname);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_opportunitymodelconfig_AsyncOperations", this.msdyn_opportunitymodelconfig_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_opportunitymodelconfig_BulkDeleteFailures", this.msdyn_opportunitymodelconfig_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_opportunitymodelconfig_DuplicateBaseRecord", this.msdyn_opportunitymodelconfig_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_opportunitymodelconfig_DuplicateMatchingRecord", this.msdyn_opportunitymodelconfig_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_opportunitymodelconfig_MailboxTrackingFolders", this.msdyn_opportunitymodelconfig_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses", this.msdyn_opportunitymodelconfig_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_opportunitymodelconfig_ProcessSession", this.msdyn_opportunitymodelconfig_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_opportunitymodelconfig_SyncErrors", this.msdyn_opportunitymodelconfig_SyncErrors);
        writer.writeStringValue("msdyn_opportunitymodelconfigid", this.msdyn_opportunitymodelconfigid);
        writer.writeStringValue("msdyn_opportunityviewid", this.msdyn_opportunityviewid);
        writer.writeStringValue("msdyn_opportunityviewname", this.msdyn_opportunityviewname);
        writer.writeStringValue("msdyn_predictionname", this.msdyn_predictionname);
        writer.writeStringValue("msdyn_qualificationvalue", this.msdyn_qualificationvalue);
        writer.writeStringValue("msdyn_statusfield", this.msdyn_statusfield);
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

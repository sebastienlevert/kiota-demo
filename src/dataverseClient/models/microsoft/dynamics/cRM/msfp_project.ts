import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_alertruleFromDiscriminatorValue} from './createMsfp_alertruleFromDiscriminatorValue';
import {createMsfp_satisfactionmetricFromDiscriminatorValue} from './createMsfp_satisfactionmetricFromDiscriminatorValue';
import {createMsfp_surveyFromDiscriminatorValue} from './createMsfp_surveyFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msfp_alert, Msfp_alertrule, Msfp_satisfactionmetric, Msfp_survey, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msfp_project extends Crmbaseentity implements Parsable {
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
    private _msfp_customerinsightsconfiguration?: string | undefined;
    private _msfp_description?: string | undefined;
    private _msfp_environmentid?: string | undefined;
    private _msfp_environmentregion?: string | undefined;
    private _msfp_msfp_project_msfp_alert_project?: Msfp_alert[] | undefined;
    private _msfp_msfp_project_msfp_alertrule_project?: Msfp_alertrule[] | undefined;
    private _msfp_msfp_project_msfp_satisfactionmetric_project?: Msfp_satisfactionmetric[] | undefined;
    private _msfp_msfp_project_msfp_survey_project?: Msfp_survey[] | undefined;
    private _msfp_name?: string | undefined;
    private _msfp_permanentid?: string | undefined;
    private _msfp_project_AsyncOperations?: Asyncoperation[] | undefined;
    private _msfp_project_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msfp_project_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msfp_project_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msfp_project_ProcessSession?: Processsession[] | undefined;
    private _msfp_project_SyncErrors?: Syncerror[] | undefined;
    private _msfp_projectid?: string | undefined;
    private _msfp_status?: number | undefined;
    private _msfp_templateid?: string | undefined;
    private _msfp_templateversion?: string | undefined;
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
     * Instantiates a new msfp_project and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msfp_project)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msfp_project)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msfp_project)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msfp_project)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msfp_project)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msfp_project)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msfp_project)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msfp_project)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msfp_project).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msfp_project).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msfp_project).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msfp_project).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msfp_project).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msfp_project).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msfp_project).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msfp_customerinsightsconfiguration": (o, n) => { (o as unknown as Msfp_project).msfp_customerinsightsconfiguration = n.getStringValue(); },
            "msfp_description": (o, n) => { (o as unknown as Msfp_project).msfp_description = n.getStringValue(); },
            "msfp_environmentid": (o, n) => { (o as unknown as Msfp_project).msfp_environmentid = n.getStringValue(); },
            "msfp_environmentregion": (o, n) => { (o as unknown as Msfp_project).msfp_environmentregion = n.getStringValue(); },
            "msfp_msfp_project_msfp_alert_project": (o, n) => { (o as unknown as Msfp_project).msfp_msfp_project_msfp_alert_project = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msfp_msfp_project_msfp_alertrule_project": (o, n) => { (o as unknown as Msfp_project).msfp_msfp_project_msfp_alertrule_project = n.getCollectionOfObjectValues<Msfp_alertrule>(createMsfp_alertruleFromDiscriminatorValue); },
            "msfp_msfp_project_msfp_satisfactionmetric_project": (o, n) => { (o as unknown as Msfp_project).msfp_msfp_project_msfp_satisfactionmetric_project = n.getCollectionOfObjectValues<Msfp_satisfactionmetric>(createMsfp_satisfactionmetricFromDiscriminatorValue); },
            "msfp_msfp_project_msfp_survey_project": (o, n) => { (o as unknown as Msfp_project).msfp_msfp_project_msfp_survey_project = n.getCollectionOfObjectValues<Msfp_survey>(createMsfp_surveyFromDiscriminatorValue); },
            "msfp_name": (o, n) => { (o as unknown as Msfp_project).msfp_name = n.getStringValue(); },
            "msfp_permanentid": (o, n) => { (o as unknown as Msfp_project).msfp_permanentid = n.getStringValue(); },
            "msfp_project_AsyncOperations": (o, n) => { (o as unknown as Msfp_project).msfp_project_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msfp_project_BulkDeleteFailures": (o, n) => { (o as unknown as Msfp_project).msfp_project_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msfp_project_MailboxTrackingFolders": (o, n) => { (o as unknown as Msfp_project).msfp_project_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msfp_project_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msfp_project).msfp_project_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msfp_project_ProcessSession": (o, n) => { (o as unknown as Msfp_project).msfp_project_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msfp_project_SyncErrors": (o, n) => { (o as unknown as Msfp_project).msfp_project_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msfp_projectid": (o, n) => { (o as unknown as Msfp_project).msfp_projectid = n.getStringValue(); },
            "msfp_status": (o, n) => { (o as unknown as Msfp_project).msfp_status = n.getNumberValue(); },
            "msfp_templateid": (o, n) => { (o as unknown as Msfp_project).msfp_templateid = n.getStringValue(); },
            "msfp_templateversion": (o, n) => { (o as unknown as Msfp_project).msfp_templateversion = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msfp_project).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msfp_project).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msfp_project).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msfp_project).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msfp_project).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msfp_project).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msfp_project).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msfp_project).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msfp_project).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msfp_project).versionnumber = n.getNumberValue(); },
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
     * Gets the msfp_customerinsightsconfiguration property value. 
     * @returns a string
     */
    public get msfp_customerinsightsconfiguration() {
        return this._msfp_customerinsightsconfiguration;
    };
    /**
     * Sets the msfp_customerinsightsconfiguration property value. 
     * @param value Value to set for the msfp_customerinsightsconfiguration property.
     */
    public set msfp_customerinsightsconfiguration(value: string | undefined) {
        this._msfp_customerinsightsconfiguration = value;
    };
    /**
     * Gets the msfp_description property value. 
     * @returns a string
     */
    public get msfp_description() {
        return this._msfp_description;
    };
    /**
     * Sets the msfp_description property value. 
     * @param value Value to set for the msfp_description property.
     */
    public set msfp_description(value: string | undefined) {
        this._msfp_description = value;
    };
    /**
     * Gets the msfp_environmentid property value. 
     * @returns a string
     */
    public get msfp_environmentid() {
        return this._msfp_environmentid;
    };
    /**
     * Sets the msfp_environmentid property value. 
     * @param value Value to set for the msfp_environmentid property.
     */
    public set msfp_environmentid(value: string | undefined) {
        this._msfp_environmentid = value;
    };
    /**
     * Gets the msfp_environmentregion property value. 
     * @returns a string
     */
    public get msfp_environmentregion() {
        return this._msfp_environmentregion;
    };
    /**
     * Sets the msfp_environmentregion property value. 
     * @param value Value to set for the msfp_environmentregion property.
     */
    public set msfp_environmentregion(value: string | undefined) {
        this._msfp_environmentregion = value;
    };
    /**
     * Gets the msfp_msfp_project_msfp_alert_project property value. 
     * @returns a msfp_alert
     */
    public get msfp_msfp_project_msfp_alert_project() {
        return this._msfp_msfp_project_msfp_alert_project;
    };
    /**
     * Sets the msfp_msfp_project_msfp_alert_project property value. 
     * @param value Value to set for the msfp_msfp_project_msfp_alert_project property.
     */
    public set msfp_msfp_project_msfp_alert_project(value: Msfp_alert[] | undefined) {
        this._msfp_msfp_project_msfp_alert_project = value;
    };
    /**
     * Gets the msfp_msfp_project_msfp_alertrule_project property value. 
     * @returns a msfp_alertrule
     */
    public get msfp_msfp_project_msfp_alertrule_project() {
        return this._msfp_msfp_project_msfp_alertrule_project;
    };
    /**
     * Sets the msfp_msfp_project_msfp_alertrule_project property value. 
     * @param value Value to set for the msfp_msfp_project_msfp_alertrule_project property.
     */
    public set msfp_msfp_project_msfp_alertrule_project(value: Msfp_alertrule[] | undefined) {
        this._msfp_msfp_project_msfp_alertrule_project = value;
    };
    /**
     * Gets the msfp_msfp_project_msfp_satisfactionmetric_project property value. 
     * @returns a msfp_satisfactionmetric
     */
    public get msfp_msfp_project_msfp_satisfactionmetric_project() {
        return this._msfp_msfp_project_msfp_satisfactionmetric_project;
    };
    /**
     * Sets the msfp_msfp_project_msfp_satisfactionmetric_project property value. 
     * @param value Value to set for the msfp_msfp_project_msfp_satisfactionmetric_project property.
     */
    public set msfp_msfp_project_msfp_satisfactionmetric_project(value: Msfp_satisfactionmetric[] | undefined) {
        this._msfp_msfp_project_msfp_satisfactionmetric_project = value;
    };
    /**
     * Gets the msfp_msfp_project_msfp_survey_project property value. 
     * @returns a msfp_survey
     */
    public get msfp_msfp_project_msfp_survey_project() {
        return this._msfp_msfp_project_msfp_survey_project;
    };
    /**
     * Sets the msfp_msfp_project_msfp_survey_project property value. 
     * @param value Value to set for the msfp_msfp_project_msfp_survey_project property.
     */
    public set msfp_msfp_project_msfp_survey_project(value: Msfp_survey[] | undefined) {
        this._msfp_msfp_project_msfp_survey_project = value;
    };
    /**
     * Gets the msfp_name property value. 
     * @returns a string
     */
    public get msfp_name() {
        return this._msfp_name;
    };
    /**
     * Sets the msfp_name property value. 
     * @param value Value to set for the msfp_name property.
     */
    public set msfp_name(value: string | undefined) {
        this._msfp_name = value;
    };
    /**
     * Gets the msfp_permanentid property value. 
     * @returns a string
     */
    public get msfp_permanentid() {
        return this._msfp_permanentid;
    };
    /**
     * Sets the msfp_permanentid property value. 
     * @param value Value to set for the msfp_permanentid property.
     */
    public set msfp_permanentid(value: string | undefined) {
        this._msfp_permanentid = value;
    };
    /**
     * Gets the msfp_project_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msfp_project_AsyncOperations() {
        return this._msfp_project_AsyncOperations;
    };
    /**
     * Sets the msfp_project_AsyncOperations property value. 
     * @param value Value to set for the msfp_project_AsyncOperations property.
     */
    public set msfp_project_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msfp_project_AsyncOperations = value;
    };
    /**
     * Gets the msfp_project_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msfp_project_BulkDeleteFailures() {
        return this._msfp_project_BulkDeleteFailures;
    };
    /**
     * Sets the msfp_project_BulkDeleteFailures property value. 
     * @param value Value to set for the msfp_project_BulkDeleteFailures property.
     */
    public set msfp_project_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msfp_project_BulkDeleteFailures = value;
    };
    /**
     * Gets the msfp_project_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msfp_project_MailboxTrackingFolders() {
        return this._msfp_project_MailboxTrackingFolders;
    };
    /**
     * Sets the msfp_project_MailboxTrackingFolders property value. 
     * @param value Value to set for the msfp_project_MailboxTrackingFolders property.
     */
    public set msfp_project_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msfp_project_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msfp_project_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msfp_project_PrincipalObjectAttributeAccesses() {
        return this._msfp_project_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msfp_project_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msfp_project_PrincipalObjectAttributeAccesses property.
     */
    public set msfp_project_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msfp_project_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msfp_project_ProcessSession property value. 
     * @returns a processsession
     */
    public get msfp_project_ProcessSession() {
        return this._msfp_project_ProcessSession;
    };
    /**
     * Sets the msfp_project_ProcessSession property value. 
     * @param value Value to set for the msfp_project_ProcessSession property.
     */
    public set msfp_project_ProcessSession(value: Processsession[] | undefined) {
        this._msfp_project_ProcessSession = value;
    };
    /**
     * Gets the msfp_project_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msfp_project_SyncErrors() {
        return this._msfp_project_SyncErrors;
    };
    /**
     * Sets the msfp_project_SyncErrors property value. 
     * @param value Value to set for the msfp_project_SyncErrors property.
     */
    public set msfp_project_SyncErrors(value: Syncerror[] | undefined) {
        this._msfp_project_SyncErrors = value;
    };
    /**
     * Gets the msfp_projectid property value. 
     * @returns a string
     */
    public get msfp_projectid() {
        return this._msfp_projectid;
    };
    /**
     * Sets the msfp_projectid property value. 
     * @param value Value to set for the msfp_projectid property.
     */
    public set msfp_projectid(value: string | undefined) {
        this._msfp_projectid = value;
    };
    /**
     * Gets the msfp_status property value. 
     * @returns a integer
     */
    public get msfp_status() {
        return this._msfp_status;
    };
    /**
     * Sets the msfp_status property value. 
     * @param value Value to set for the msfp_status property.
     */
    public set msfp_status(value: number | undefined) {
        this._msfp_status = value;
    };
    /**
     * Gets the msfp_templateid property value. 
     * @returns a string
     */
    public get msfp_templateid() {
        return this._msfp_templateid;
    };
    /**
     * Sets the msfp_templateid property value. 
     * @param value Value to set for the msfp_templateid property.
     */
    public set msfp_templateid(value: string | undefined) {
        this._msfp_templateid = value;
    };
    /**
     * Gets the msfp_templateversion property value. 
     * @returns a string
     */
    public get msfp_templateversion() {
        return this._msfp_templateversion;
    };
    /**
     * Sets the msfp_templateversion property value. 
     * @param value Value to set for the msfp_templateversion property.
     */
    public set msfp_templateversion(value: string | undefined) {
        this._msfp_templateversion = value;
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
        writer.writeStringValue("msfp_customerinsightsconfiguration", this.msfp_customerinsightsconfiguration);
        writer.writeStringValue("msfp_description", this.msfp_description);
        writer.writeStringValue("msfp_environmentid", this.msfp_environmentid);
        writer.writeStringValue("msfp_environmentregion", this.msfp_environmentregion);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msfp_msfp_project_msfp_alert_project", this.msfp_msfp_project_msfp_alert_project);
        writer.writeCollectionOfObjectValues<Msfp_alertrule>("msfp_msfp_project_msfp_alertrule_project", this.msfp_msfp_project_msfp_alertrule_project);
        writer.writeCollectionOfObjectValues<Msfp_satisfactionmetric>("msfp_msfp_project_msfp_satisfactionmetric_project", this.msfp_msfp_project_msfp_satisfactionmetric_project);
        writer.writeCollectionOfObjectValues<Msfp_survey>("msfp_msfp_project_msfp_survey_project", this.msfp_msfp_project_msfp_survey_project);
        writer.writeStringValue("msfp_name", this.msfp_name);
        writer.writeStringValue("msfp_permanentid", this.msfp_permanentid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msfp_project_AsyncOperations", this.msfp_project_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msfp_project_BulkDeleteFailures", this.msfp_project_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msfp_project_MailboxTrackingFolders", this.msfp_project_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msfp_project_PrincipalObjectAttributeAccesses", this.msfp_project_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msfp_project_ProcessSession", this.msfp_project_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msfp_project_SyncErrors", this.msfp_project_SyncErrors);
        writer.writeStringValue("msfp_projectid", this.msfp_projectid);
        writer.writeNumberValue("msfp_status", this.msfp_status);
        writer.writeStringValue("msfp_templateid", this.msfp_templateid);
        writer.writeStringValue("msfp_templateversion", this.msfp_templateversion);
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
